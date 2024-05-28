import { Request, Response } from "express";
import { modelsPls } from "../config/database";
import { literal, Op, Sequelize } from "sequelize";
import sequelize from "sequelize";

const {
  ref_stage,
  entity_stage,
  ref_action,
  ref_stage_action,
  ref_stage_action_stage,
} = modelsPls;

export const getStageByEntityID = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const stages = await entity_stage.findAll({
      where: {
        [Op.and]: [{ entity_id: id }, literal("ts_action IS NULL")],
      },
      attributes: [
        "entity_stage_id",
        "rstage_id",
        "entity_id",
        "ts_created",
        "user_created",
      ],
      include: [
        {
          model: ref_stage,
          as: "rstage",
          attributes: ["rstage_name", "rstage_label"],
        },
      ],
    });

    const formattedData = stages.map((stage) => {
      return {
        entity_stage_id: stage.entity_stage_id,
        rstage_id: stage.rstage_id,
        rstage_name: stage.rstage.rstage_name,
        rstage_label: stage.rstage.rstage_label,
        entity_id: stage.entity_id,
        ts_created: stage.ts_created,
        user_created: stage.user_created,
      };
    });

    res.status(200).json(formattedData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getStageActionByEntityID = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const stages = await entity_stage.findAll({
      where: {
        [Op.and]: [{ entity_id: id }, literal("ts_action IS NULL")],
      },
      attributes: ["entity_stage_id", "rstage_id", "entity_id"],
      include: [
        {
          model: ref_stage,
          as: "rstage",
          attributes: ["rstage_name", "rstage_label"],
          include: [
            {
              model: ref_stage_action,
              as: "ref_stage_actions",
              include: [
                {
                  model: ref_action,
                  as: "raction",
                  attributes: ["raction_name", "raction_label", "raction_id"],
                },
              ],
            },
            // {
            //   model: ref_stage_action_actor,
            //   as: "ref_stage_action_actors",
            //   attributes: ["ts_action", "user_action"],
            // },
          ],
        },
      ],
    });
    const formattedData = stages.map((stage) => ({
      entity_stage_id: stage.entity_stage_id,
      entity_id: stage.entity_id,
      rstage_name: stage.rstage.rstage_name,
      rstage_label: stage.rstage.rstage_label,
      ts_created: stage.ts_created,
      user_created: stage.user_created,
      available_actions: stage.rstage.ref_stage_actions.map((action) => ({
        raction_id: action.raction_id,
        raction_name: action.raction.raction_name,
        raction_label: action.raction.raction_label,
      })),
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const complitedStage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, raction_id } = req.params;
    //обновляем этап вставляем действие
    const stage = await entity_stage.update(
      {
        ts_action: new Date(),
        user_action: req.user?.username,
        raction_id: parseInt(raction_id),
      },
      { where: { entity_stage_id: id } }
    );

    // Выполняем дополнительный запрос для получения обновленной записи
    const updatedEntity = await entity_stage.findOne({
      where: { entity_stage_id: id },
    });

    //получаем список актуальных этапо у текущей сущности
    const current_stages = await entity_stage.findAll({
      where: {
        [Op.and]: [
          { entity_id: updatedEntity?.entity_id },
          literal("ts_action IS NULL"),
        ],
      },
      attributes: ["rstage_id"],
    });

    //получаем этапы который необходимо создать
    const new_stage = await ref_stage_action.findAll({
      where: { raction_id: raction_id, rstage_id: updatedEntity?.rstage_id },
      attributes: ["rstage_action_id"],
      include: [
        {
          model: ref_stage_action_stage,
          as: "ref_stage_action_stages",
          attributes: ["rstage_id"],
          required: true,
          include: [
            {
              model: ref_stage,
              as: "rstage",
              attributes: ["rentity_type_id"],
              required: true,
            },
          ],
        },
      ],
    });

    const new_rstage_id = new_stage
      .map((stage) =>
        stage.ref_stage_action_stages.map((stages) => stages.rstage_id)
      )
      .flat();

    //проверяем нужно ли создать им сущность для отображения атрибутов

    //создадим массив для вставки
    const insertData = new_rstage_id.map((stage) => ({
      entity_id: updatedEntity?.entity_id,
      rstage_id: stage,
      ts_created: new Date(),
      user_created: req.user?.username,
    }));

    await entity_stage.bulkCreate(insertData);

    res.status(200).json({ message: "Stage completed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
