import { Request, Response } from "express";
import { modelsPls } from "../config/database";
import { literal, Op } from "sequelize";

const {
  entity_entity,
  entity,
  ref_entity_type,
  entity_attr,
  ref_attr,
  ref_attr_group,
  entity_stage,
  ref_stage,
} = modelsPls;

export const getEntityLinks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { rentity_type_name } = req.params;
    const links = await entity_entity.findAll({
      where: { entity_id: id && literal("entity_entity.ts_deleted IS NULL") },
      attributes: ["ent_ent_id", "ts_created", "user_created"],
      include: [
        {
          model: entity,
          attributes: ["entity_id"],
          as: "entity",
          include: [
            {
              model: ref_entity_type,
              as: "rentity_type",
              attributes: ["rentity_type_name", "rentity_type_label"],
            },
          ],
        },
        {
          model: entity,
          as: "entity_id_link_entity",
          attributes: ["entity_id"],
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
        },
      ],
    });

    const formattedData = links.map((link) => ({
      ent_ent_id: link.ent_ent_id,
      ts_created: link.ts_created,
      user_created: link.user_created,
      entity_link: link.entity_id_link_entity && {
        entity_id: link.entity_id_link_entity.entity_id,
        ts_deleted: link.entity_id_link_entity.ts_deleted,
        user_deleted: link.entity_id_link_entity.user_deleted,
        chatroom_uuid: link.entity_id_link_entity.chatroom_uuid,
        ts_created: link.entity_id_link_entity.ts_created,
        user_created: link.entity_id_link_entity.user_created,
        rentity_type_id:
          link.entity_id_link_entity.rentity_type?.rentity_type_id,
        rentity_type_name:
          link.entity_id_link_entity.rentity_type?.rentity_type_name,
        rentity_type_label:
          link.entity_id_link_entity.rentity_type?.rentity_type_label,
        rroute_id: link.entity_id_link_entity.rentity_type?.rroute_id,
        entity_attr: link.entity_id_link_entity.entity_attrs?.map((attr) => ({
          entity_attr_id: attr.entity_attr_id,
          rattr_id: attr.rattr?.rattr_id,
          rattr_name: attr.rattr?.rattr_name,
          rattr_label: attr.rattr?.rattr_label,
          entity_attr_value: attr.entity_attr_value,
          rattr_type: attr.rattr?.rattr_type,
          rattr_group_id: attr.rattr?.rattr_group_id,
          rattr_view: attr.rattr?.rattr_view,
          rattr_no: attr.rattr?.rattr_no,
          rattr_group_name: attr.rattr?.rattr_group?.rattr_group_name,
          rattr_group_label: attr.rattr?.rattr_group?.rattr_group_label,
        })),
        entity_stage: link.entity_id_link_entity.entity_stages?.map(
          (stage) => ({
            entity_stage_id: stage.entity_stage_id,
            rstage_id: stage.rstage?.rstage_id,
            ts_created: stage.ts_created,
            user_created: stage.user_created,
            rstage_name: stage.rstage?.rstage_name,
            rstage_label: stage.rstage?.rstage_label,
          })
        ),
      },
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createEntityLink = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, id_link } = req.params;
    const link = await entity_entity.create({
      entity_id: parseInt(id),
      entity_id_link: parseInt(id_link),
      ts_created: new Date(),
      user_created: req.user?.username,
    });
    res.status(200).json({ message: "Link created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteEntityLink = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, id_link } = req.params;
    await entity_entity.destroy({
      where: { entity_id: id, entity_id_link: id_link },
    });
    res.status(200).json({ message: "Link deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
