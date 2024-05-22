import { Request, Response } from "express";
import { modelsPls } from "../config/database";
import { literal, Op } from "sequelize";
import * as bodyEntitys from "../interface/bodyEntitys";

const {
  entity,
  ref_entity_type,
  ref_attr,
  ref_attr_group,
  entity_attr,
  entity_stage,
  ref_stage,
  ref_route,
} = modelsPls;

//получаем список сущностей
export const getEntity = async (req: Request, res: Response): Promise<void> => {
  try {
    const listEntity = await entity.findAll({
      where: literal("ts_deleted IS NULL"),
      include: [
        {
          model: ref_entity_type,
          as: "rentity_type",
          required: false,
          // where: { rentity_type_name: rentity_type_name },
          attributes: [
            "rentity_type_id",
            "rentity_type_name",
            "rentity_type_label",
            "rroute_id",
          ],
        },
        {
          model: entity_attr,
          as: "entity_attrs",
          required: false,
          attributes: ["entity_attr_id", "rattr_id", "entity_attr_value"],
          include: [
            {
              model: ref_attr,
              as: "rattr",
              required: false,
              attributes: [
                "rattr_name",
                "rattr_label",
                "rattr_type",
                "rattr_group_id",
                "rattr_view",
                "rattr_no",
              ],
              include: [
                {
                  model: ref_attr_group,
                  as: "rattr_group",
                  required: false,
                  attributes: ["rattr_group_name", "rattr_group_label"],
                },
              ],
            },
          ],
          order: [["rattr", "rattr_no", "ASC"]],
        },
        {
          model: entity_stage,
          as: "entity_stages",
          required: false,
          where: literal("ts_action IS NULL"),
          attributes: [
            "entity_stage_id",
            "rstage_id",
            "ts_created",
            "user_created",
          ],
          include: [
            {
              model: ref_stage,
              as: "rstage",
              required: false,
              attributes: ["rstage_name", "rstage_label"],
            },
          ],
        },
      ],
      order: [["ts_created", "DESC"]],
    });
    //преобразуем данные для вывода в нужном формате
    const formattedData = listEntity.map((data) => ({
      entity_id: data.entity_id,
      ts_deleted: data.ts_deleted,
      user_deleted: data.user_deleted,
      chatroom_uuid: data.chatroom_uuid,
      ts_created: data.ts_created,
      user_created: data.user_created,
      rentity_type_id: data.rentity_type.rentity_type_id,
      rentity_type_name: data.rentity_type.rentity_type_name,
      rentity_type_label: data.rentity_type.rentity_type_label,
      rroute_id: data.rentity_type.rroute_id,
      entity_attr: data.entity_attrs.map((attr) => ({
        entity_attr_id: attr.entity_attr_id,
        rattr_id: attr.rattr.rattr_id,
        rattr_name: attr.rattr.rattr_name,
        rattr_label: attr.rattr.rattr_label,
        entity_attr_value: attr.entity_attr_value,
        rattr_type: attr.rattr.rattr_type,
        rattr_group_id: attr.rattr.rattr_group_id,
        rattr_view: attr.rattr.rattr_view,
        rattr_no: attr.rattr.rattr_no,
        rattr_group_name: attr.rattr.rattr_group.rattr_group_name,
        rattr_group_label: attr.rattr.rattr_group.rattr_group_label,
      })),
      entity_stage: data.entity_stages.map((stage) => ({
        entity_stage_id: stage.entity_stage_id,
        rstage_id: stage.rstage.rstage_id,
        ts_created: stage.ts_created,
        user_created: stage.user_created,
        rstage_name: stage.rstage.rstage_name,
        rstage_label: stage.rstage.rstage_label,
      })),
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//получаем сущность по идентификатору
export const getEntityById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const getEntityByID = await entity.findAll({
      where: { entity_id: parseInt(id) },
      include: [
        {
          model: ref_entity_type,
          as: "rentity_type",
          required: false,
          // where: { rentity_type_name: rentity_type_name },
          attributes: [
            "rentity_type_id",
            "rentity_type_name",
            "rentity_type_label",
            "rroute_id",
          ],
        },
        {
          model: entity_attr,
          as: "entity_attrs",
          required: false,
          attributes: ["entity_attr_id", "rattr_id", "entity_attr_value"],
          include: [
            {
              model: ref_attr,
              as: "rattr",
              required: false,
              attributes: [
                "rattr_name",
                "rattr_label",
                "rattr_type",
                "rattr_group_id",
                "rattr_view",
                "rattr_no",
              ],
              include: [
                {
                  model: ref_attr_group,
                  as: "rattr_group",
                  required: false,
                  attributes: ["rattr_group_name", "rattr_group_label"],
                },
              ],
            },
          ],
          order: [["rattr", "rattr_no", "ASC"]],
        },
        {
          model: entity_stage,
          as: "entity_stages",
          required: false,
          where: literal("ts_action IS NULL"),
          attributes: [
            "entity_stage_id",
            "rstage_id",
            "ts_created",
            "user_created",
          ],
          include: [
            {
              model: ref_stage,
              as: "rstage",
              required: false,
              attributes: ["rstage_name", "rstage_label"],
            },
          ],
        },
      ],
      order: [["ts_created", "DESC"]],
    });
    //преобразуем данные для вывода в нужном формате
    const formattedData = getEntityByID.map((data) => ({
      entity_id: data.entity_id,
      ts_deleted: data.ts_deleted,
      user_deleted: data.user_deleted,
      chatroom_uuid: data.chatroom_uuid,
      ts_created: data.ts_created,
      user_created: data.user_created,
      rentity_type_id: data.rentity_type.rentity_type_id,
      rentity_type_name: data.rentity_type.rentity_type_name,
      rentity_type_label: data.rentity_type.rentity_type_label,
      rroute_id: data.rentity_type.rroute_id,
      entity_attr: data.entity_attrs.map((attr) => ({
        entity_attr_id: attr.entity_attr_id,
        rattr_id: attr.rattr.rattr_id,
        rattr_name: attr.rattr.rattr_name,
        rattr_label: attr.rattr.rattr_label,
        entity_attr_value: attr.entity_attr_value,
        rattr_type: attr.rattr.rattr_type,
        rattr_group_id: attr.rattr.rattr_group_id,
        rattr_view: attr.rattr.rattr_view,
        rattr_no: attr.rattr.rattr_no,
        rattr_group_name: attr.rattr.rattr_group.rattr_group_name,
        rattr_group_label: attr.rattr.rattr_group.rattr_group_label,
      })),
      entity_stage: data.entity_stages.map((stage) => ({
        entity_stage_id: stage.entity_stage_id,
        rstage_id: stage.rstage.rstage_id,
        ts_created: stage.ts_created,
        user_created: stage.user_created,
        rstage_name: stage.rstage.rstage_name,
        rstage_label: stage.rstage.rstage_label,
      })),
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
//создаем сущность по типу
export const createEntity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { rentity_type_name } = req.params;
    // Проверка наличия типа сущности
    const currentType = await ref_entity_type.findOne({
      where: { rentity_type_name: rentity_type_name },
    });

    if (currentType == null) {
      res.status(400).json({ message: "Entity type not found" });
      return;
    }
    // Создание новой сущности
    const newEntity = await entity.create({
      rentity_type_id: currentType.rentity_type_id,
      ts_created: new Date(),
      user_created: req.user?.username,
    });

    // Ищем группу атрибутов для текущего типа сущности
    const currentGroupAttr = await ref_attr_group.findOne({
      where: { rentity_type_id: currentType?.rentity_type_id },
    });
    // Ищем все атрибуты для данной группы
    const currentAttr = await ref_attr.findAll({
      where: { rattr_group_id: currentGroupAttr?.rattr_group_id },
    });
    // Собираем атрибуты в пакет для вставки
    const insertData = currentAttr.map((attr) => {
      return {
        entity_id: newEntity.entity_id,
        rattr_id: attr.rattr_id,
        entity_attr_value: "",
      };
    });
    //вставка пакета атрибутов
    await entity_attr.bulkCreate(insertData);

    //ищем с каого этапа начинается маршрут
    const currentRout = await ref_route.findOne({
      where: { rroute_id: currentType?.rroute_id },
    });

    //вставляем этап начала маршрута
    await entity_stage.create({
      entity_id: newEntity.entity_id,
      rstage_id: currentRout?.rstage_id_start,
      ts_created: new Date(),
      user_created: req.user?.username,
    });

    //возвращаем созданую сущность
    const getEntityByID = await entity.findAll({
      where: { entity_id: newEntity.entity_id },
      include: [
        {
          model: ref_entity_type,
          as: "rentity_type",
          required: false,
          // where: { rentity_type_name: rentity_type_name },
          attributes: [
            "rentity_type_id",
            "rentity_type_name",
            "rentity_type_label",
            "rroute_id",
          ],
        },
        {
          model: entity_attr,
          as: "entity_attrs",
          required: false,
          attributes: ["entity_attr_id", "rattr_id", "entity_attr_value"],
          include: [
            {
              model: ref_attr,
              as: "rattr",
              required: false,
              attributes: [
                "rattr_name",
                "rattr_label",
                "rattr_type",
                "rattr_group_id",
                "rattr_view",
                "rattr_no",
              ],
              include: [
                {
                  model: ref_attr_group,
                  as: "rattr_group",
                  required: false,
                  attributes: ["rattr_group_name", "rattr_group_label"],
                },
              ],
            },
          ],
          order: [["rattr", "rattr_no", "ASC"]],
        },
        {
          model: entity_stage,
          as: "entity_stages",
          required: false,
          where: literal("ts_action IS NULL"),
          attributes: [
            "entity_stage_id",
            "rstage_id",
            "ts_created",
            "user_created",
          ],
          include: [
            {
              model: ref_stage,
              as: "rstage",
              required: false,
              attributes: ["rstage_name", "rstage_label"],
            },
          ],
        },
      ],
      order: [["ts_created", "DESC"]],
    });
    //преобразуем данные для вывода в нужном формате
    const formattedData = getEntityByID.map((data) => ({
      entity_id: data.entity_id,
      ts_deleted: data.ts_deleted,
      user_deleted: data.user_deleted,
      chatroom_uuid: data.chatroom_uuid,
      ts_created: data.ts_created,
      user_created: data.user_created,
      rentity_type_id: data.rentity_type.rentity_type_id,
      rentity_type_name: data.rentity_type.rentity_type_name,
      rentity_type_label: data.rentity_type.rentity_type_label,
      rroute_id: data.rentity_type.rroute_id,
      entity_attr: data.entity_attrs.map((attr) => ({
        entity_attr_id: attr.entity_attr_id,
        rattr_id: attr.rattr.rattr_id,
        rattr_name: attr.rattr.rattr_name,
        rattr_label: attr.rattr.rattr_label,
        entity_attr_value: attr.entity_attr_value,
        rattr_type: attr.rattr.rattr_type,
        rattr_group_id: attr.rattr.rattr_group_id,
        rattr_view: attr.rattr.rattr_view,
        rattr_no: attr.rattr.rattr_no,
        rattr_group_name: attr.rattr.rattr_group.rattr_group_name,
        rattr_group_label: attr.rattr.rattr_group.rattr_group_label,
      })),
      entity_stage: data.entity_stages.map((stage) => ({
        entity_stage_id: stage.entity_stage_id,
        rstage_id: stage.rstage.rstage_id,
        ts_created: stage.ts_created,
        user_created: stage.user_created,
        rstage_name: stage.rstage.rstage_name,
        rstage_label: stage.rstage.rstage_label,
      })),
    }));

    res.status(201).json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteEntity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await entity.destroy({ where: { entity_id: id } });
    res.status(200).json({ message: "Entity deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getEntityByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { rentity_type_name } = req.params;

    const listEntity = await entity.findAll({
      include: [
        {
          model: ref_entity_type,
          as: "rentity_type",
          required: true,
          where: { rentity_type_name: rentity_type_name },
          attributes: [
            "rentity_type_id",
            "rentity_type_name",
            "rentity_type_label",
            "rroute_id",
          ],
        },
        {
          model: entity_attr,
          as: "entity_attrs",
          required: true,
          attributes: ["entity_attr_id", "rattr_id", "entity_attr_value"],
          include: [
            {
              model: ref_attr,
              as: "rattr",
              required: true,
              attributes: [
                "rattr_name",
                "rattr_label",
                "rattr_type",
                "rattr_group_id",
                "rattr_view",
                "rattr_no",
              ],
              include: [
                {
                  model: ref_attr_group,
                  as: "rattr_group",
                  required: true,
                  attributes: ["rattr_group_name", "rattr_group_label"],
                },
              ],
            },
          ],
          order: [["rattr", "rattr_no", "ASC"]],
        },
        {
          model: entity_stage,
          as: "entity_stages",
          required: true,
          where: literal("ts_action IS NULL"),
          attributes: [
            "entity_stage_id",
            "rstage_id",
            "ts_created",
            "user_created",
          ],
          include: [
            {
              model: ref_stage,
              as: "rstage",
              required: true,
              attributes: ["rstage_name", "rstage_label"],
            },
          ],
        },
      ],
      order: [["ts_created", "DESC"]],
    });

    //преобразуем данные для вывода в нужном формате
    const formattedData = listEntity.map((data) => ({
      entity_id: data.entity_id,
      ts_deleted: data.ts_deleted,
      user_deleted: data.user_deleted,
      chatroom_uuid: data.chatroom_uuid,
      ts_created: data.ts_created,
      user_created: data.user_created,
      rentity_type_id: data.rentity_type.rentity_type_id,
      rentity_type_name: data.rentity_type.rentity_type_name,
      rentity_type_label: data.rentity_type.rentity_type_label,
      rroute_id: data.rentity_type.rroute_id,
      entity_attr: data.entity_attrs.map((attr) => ({
        entity_attr_id: attr.entity_attr_id,
        rattr_id: attr.rattr.rattr_id,
        rattr_name: attr.rattr.rattr_name,
        rattr_label: attr.rattr.rattr_label,
        entity_attr_value: attr.entity_attr_value,
        rattr_type: attr.rattr.rattr_type,
        rattr_group_id: attr.rattr.rattr_group_id,
        rattr_view: attr.rattr.rattr_view,
        rattr_no: attr.rattr.rattr_no,
        rattr_group_name: attr.rattr.rattr_group.rattr_group_name,
        rattr_group_label: attr.rattr.rattr_group.rattr_group_label,
      })),
      entity_stage: data.entity_stages.map((stage) => ({
        entity_stage_id: stage.entity_stage_id,
        rstage_id: stage.rstage.rstage_id,
        ts_created: stage.ts_created,
        user_created: stage.user_created,
        rstage_name: stage.rstage.rstage_name,
        rstage_label: stage.rstage.rstage_label,
      })),
    }));

    res.status(200).json(formattedData); // Отправляем преобразованный массив
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateEntityAttr = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const entity_id = req.params.id;

    const rez = req.body.ref_attr.map((attr: any) => {
      return {
        entity_attr_id: attr.entity_attr_id,
        entity_attr_value: attr.entity_attr_value,
      };
    });

    for (const update of rez) {
      await entity_attr.update(
        { entity_attr_value: update.entity_attr_value },
        { where: { entity_attr_id: update.entity_attr_id } }
      );
    }

    res.status(200).json({ message: "Entity attribute updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
