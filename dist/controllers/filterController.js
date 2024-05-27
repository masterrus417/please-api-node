"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterParamsByTypeName = exports.getFilter = void 0;
const database_1 = require("../config/database");
const { ref_entity_filter, ref_entity_filter_attr, ref_attr, ref_entity_type, ref_attr_dict, } = database_1.modelsPls;
const getFilter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = yield ref_entity_filter.findAll({
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
        res.status(200).json(listFilters);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getFilter = getFilter;
const getFilterParamsByTypeName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rentity_filter_name } = req.params;
        const filters = yield ref_entity_filter.findAll({
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
                            attributes: ["rattr_name", "rattr_label", "rattr_type"],
                            include: [
                                {
                                    model: ref_attr_dict,
                                    as: "ref_attr_dicts",
                                    attributes: [
                                        "rattr_dict_name",
                                        "rattr_dict_label",
                                        "rattr_dict_no",
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        const attrFilters = filters.map((filter) => {
            return {
                rentity_filter_id: filter.rentity_filter_id,
                rentity_filter_name: filter.rentity_filter_name,
                rentity_filter_attr: filter.ref_entity_filter_attrs.map((attr) => {
                    return {
                        rattr_id: attr.rattr_id,
                        rattr_name: attr.rattr.rattr_name,
                        rattr_type: attr.rattr.rattr_type,
                        rattr_label: attr.rattr.rattr_label,
                        choice_value: attr.rattr.ref_attr_dicts.map((dict) => {
                            return {
                                rattr_dict_no: dict.rattr_dict_no,
                                rattr_dict_name: dict.rattr_dict_name,
                                rattr_dict_label: dict.rattr_dict_label,
                            };
                        }),
                    };
                }),
            };
        });
        res.status(200).json(attrFilters);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getFilterParamsByTypeName = getFilterParamsByTypeName;
