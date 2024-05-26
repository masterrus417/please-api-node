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
exports.deleteEntityLink = exports.createEntityLink = exports.getEntityLinks = void 0;
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
const { entity_entity, entity, ref_entity_type, entity_attr, ref_attr, ref_attr_group, entity_stage, ref_stage, } = database_1.modelsPls;
const getEntityLinks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { rentity_type_name } = req.params;
        const links = yield entity_entity.findAll({
            where: { entity_id: id && (0, sequelize_1.literal)("entity_entity.ts_deleted IS NULL") },
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
                            where: (0, sequelize_1.literal)("ts_action IS NULL"),
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
        const formattedData = links.map((link) => {
            var _a, _b, _c, _d, _e, _f;
            return ({
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
                    rentity_type_id: (_a = link.entity_id_link_entity.rentity_type) === null || _a === void 0 ? void 0 : _a.rentity_type_id,
                    rentity_type_name: (_b = link.entity_id_link_entity.rentity_type) === null || _b === void 0 ? void 0 : _b.rentity_type_name,
                    rentity_type_label: (_c = link.entity_id_link_entity.rentity_type) === null || _c === void 0 ? void 0 : _c.rentity_type_label,
                    rroute_id: (_d = link.entity_id_link_entity.rentity_type) === null || _d === void 0 ? void 0 : _d.rroute_id,
                    entity_attr: (_e = link.entity_id_link_entity.entity_attrs) === null || _e === void 0 ? void 0 : _e.map((attr) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                        return ({
                            entity_attr_id: attr.entity_attr_id,
                            rattr_id: (_a = attr.rattr) === null || _a === void 0 ? void 0 : _a.rattr_id,
                            rattr_name: (_b = attr.rattr) === null || _b === void 0 ? void 0 : _b.rattr_name,
                            rattr_label: (_c = attr.rattr) === null || _c === void 0 ? void 0 : _c.rattr_label,
                            entity_attr_value: attr.entity_attr_value,
                            rattr_type: (_d = attr.rattr) === null || _d === void 0 ? void 0 : _d.rattr_type,
                            rattr_group_id: (_e = attr.rattr) === null || _e === void 0 ? void 0 : _e.rattr_group_id,
                            rattr_view: (_f = attr.rattr) === null || _f === void 0 ? void 0 : _f.rattr_view,
                            rattr_no: (_g = attr.rattr) === null || _g === void 0 ? void 0 : _g.rattr_no,
                            rattr_group_name: (_j = (_h = attr.rattr) === null || _h === void 0 ? void 0 : _h.rattr_group) === null || _j === void 0 ? void 0 : _j.rattr_group_name,
                            rattr_group_label: (_l = (_k = attr.rattr) === null || _k === void 0 ? void 0 : _k.rattr_group) === null || _l === void 0 ? void 0 : _l.rattr_group_label,
                        });
                    }),
                    entity_stage: (_f = link.entity_id_link_entity.entity_stages) === null || _f === void 0 ? void 0 : _f.map((stage) => {
                        var _a, _b, _c;
                        return ({
                            entity_stage_id: stage.entity_stage_id,
                            rstage_id: (_a = stage.rstage) === null || _a === void 0 ? void 0 : _a.rstage_id,
                            ts_created: stage.ts_created,
                            user_created: stage.user_created,
                            rstage_name: (_b = stage.rstage) === null || _b === void 0 ? void 0 : _b.rstage_name,
                            rstage_label: (_c = stage.rstage) === null || _c === void 0 ? void 0 : _c.rstage_label,
                        });
                    }),
                },
            });
        });
        res.status(200).json(formattedData);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getEntityLinks = getEntityLinks;
const createEntityLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id, id_link } = req.params;
        const link = yield entity_entity.create({
            entity_id: parseInt(id),
            entity_id_link: parseInt(id_link),
            ts_created: new Date(),
            user_created: (_a = req.user) === null || _a === void 0 ? void 0 : _a.username,
        });
        res.status(200).json({ message: "Link created successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.createEntityLink = createEntityLink;
const deleteEntityLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, id_link } = req.params;
        yield entity_entity.destroy({
            where: { entity_id: id, entity_id_link: id_link },
        });
        res.status(200).json({ message: "Link deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.deleteEntityLink = deleteEntityLink;
