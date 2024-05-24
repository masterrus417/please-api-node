import { Request, Response } from "express";
import { modelsPls } from "../config/database";

const { ref_entity_filter, ref_entity_filter_attr, ref_attr, ref_entity_type } =
  modelsPls;
export const getFilter = async (req: Request, res: Response): Promise<void> => {
  try {
    const filters = await ref_entity_filter.findAll({
      attributes: [
        "rentity_filter_id",
        "rentity_filter_name",
        "rentity_filter_label",
      ],
      include: [
        {
          model: ref_entity_type,
          as: "rentity_type",
          attributes: ["rentity_type_name", "rentity_type_label"],
        },
      ],
    });

    const listFilters = filters.map((filter) => {
      return {
        rentity_filter_id: filter.rentity_filter_id,
        rentity_filter_name: filter.rentity_filter_name,
        rentity_filter_label: filter.rentity_filter_label,
        rentity_type_name: filter.rentity_type.rentity_type_name,
        rentity_type_label: filter.rentity_type.rentity_type_label,
      };
    });

    res.status(200).json({ listFilters });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getFilterParamsByTypeName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { rentity_filter_name } = req.params;
    const filters = await ref_entity_filter.findAll({
      where: { rentity_filter_name: rentity_filter_name },
      attributes: ["rentity_filter_id", "rentity_filter_name"],
      include: [
        {
          model: ref_entity_filter_attr,
          as: "ref_entity_filter_attrs",
          attributes: ["rattr_id"],
          include: [
            {
              model: ref_attr,
              as: "rattr",
              attributes: ["rattr_name"],
            },
          ],
        },
      ],
    });

    const attrFilters = filters.map((filter) => {
      return {
        rentity_filter_id: filter.rentity_filter_id,
        rentity_filter_name: filter.rentity_filter_name,
        ref_entity_filter_attrs: filter.ref_entity_filter_attrs.map((attr) => {
          return {
            rattr_id: attr.rattr_id,
            rattr_name: attr.rattr.rattr_name,
          };
        }),
      };
    });

    res.status(200).json({ attrFilters });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
