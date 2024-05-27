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
exports.updateEntityAttr = exports.getEntityByTypeByID = exports.getEntityByType = exports.deleteEntity = exports.createEntity = exports.getEntityById = exports.getEntity = void 0;
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
const { entity, ref_entity_type, ref_attr, ref_attr_group, entity_attr, entity_stage, ref_stage, ref_route, } = database_1.modelsPls;
//получаем список сущностей
const getEntity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listEntity = yield entity.findAll({
            where: (0, sequelize_1.literal)("ts_deleted IS NULL"),
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
            order: [
                ["ts_created", "DESC"],
                [
                    { model: entity_attr, as: "entity_attrs" },
                    { model: ref_attr, as: "rattr" },
                    "rattr_no",
                    "ASC",
                ],
            ],
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getEntity = getEntity;
//получаем сущность по идентификатору
const getEntityById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const getEntityByID = yield entity.findAll({
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
            order: [
                ["ts_created", "DESC"],
                [
                    { model: entity_attr, as: "entity_attrs" },
                    { model: ref_attr, as: "rattr" },
                    "rattr_no",
                    "ASC",
                ],
            ],
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getEntityById = getEntityById;
//создаем сущность по типу
const createEntity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { rentity_type_name } = req.params;
        // Проверка наличия типа сущности
        const currentType = yield ref_entity_type.findOne({
            where: { rentity_type_name: rentity_type_name },
        });
        if (currentType == null) {
            res.status(400).json({ message: "Entity type not found" });
            return;
        }
        // Создание новой сущности
        const newEntity = yield entity.create({
            rentity_type_id: currentType.rentity_type_id,
            ts_created: new Date(),
            user_created: (_a = req.user) === null || _a === void 0 ? void 0 : _a.username,
        });
        // Ищем группу атрибутов для текущего типа сущности
        const currentGroupAttr = yield ref_attr_group.findOne({
            where: { rentity_type_id: currentType === null || currentType === void 0 ? void 0 : currentType.rentity_type_id },
        });
        // Ищем все атрибуты для данной группы
        const currentAttr = yield ref_attr.findAll({
            where: { rattr_group_id: currentGroupAttr === null || currentGroupAttr === void 0 ? void 0 : currentGroupAttr.rattr_group_id },
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
        yield entity_attr.bulkCreate(insertData);
        //ищем с каого этапа начинается маршрут
        const currentRout = yield ref_route.findOne({
            where: { rroute_id: currentType === null || currentType === void 0 ? void 0 : currentType.rroute_id },
        });
        //вставляем этап начала маршрута
        yield entity_stage.create({
            entity_id: newEntity.entity_id,
            rstage_id: currentRout === null || currentRout === void 0 ? void 0 : currentRout.rstage_id_start,
            ts_created: new Date(),
            user_created: (_b = req.user) === null || _b === void 0 ? void 0 : _b.username,
        });
        //возвращаем созданую сущность
        const getEntityByID = yield entity.findAll({
            where: { entity_id: newEntity.entity_id },
            include: [
                {
                    model: ref_entity_type,
                    as: "rentity_type",
                    required: false,
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
            order: [
                ["ts_created", "DESC"],
                [
                    { model: entity_attr, as: "entity_attrs" },
                    { model: ref_attr, as: "rattr" },
                    "rattr_no",
                    "ASC",
                ],
            ],
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
                rattr: attr.rattr_id,
                entity: data.entity_id,
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.createEntity = createEntity;
const deleteEntity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield entity.destroy({ where: { entity_id: id } });
        res.status(200).json({ message: "Entity deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.deleteEntity = deleteEntity;
const getEntityByType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rentity_type_name } = req.params;
        console.log(rentity_type_name);
        const listEntity = yield entity.findAll({
            include: [
                {
                    model: ref_entity_type,
                    as: "rentity_type",
                    required: true,
                    attributes: [
                        "rentity_type_id",
                        "rentity_type_name",
                        "rentity_type_label",
                        "rroute_id",
                    ],
                    where: {
                        rentity_type_name: rentity_type_name, // Замените 'some_value' на нужное значение
                    },
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
                                    attributes: [
                                        "rattr_group_name",
                                        "rattr_group_label",
                                        "rattr_group_id",
                                    ],
                                },
                            ],
                        },
                    ],
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
            order: [
                ["ts_created", "DESC"],
                [
                    { model: entity_attr, as: "entity_attrs" },
                    { model: ref_attr, as: "rattr" },
                    "rattr_no",
                    "ASC",
                ],
            ],
        });
        //преобразуем данные для вывода в нужном формате
        const formattedData = listEntity.map((data) => {
            var _a, _b, _c;
            return ({
                entity_id: data.entity_id,
                ts_deleted: data.ts_deleted,
                user_deleted: data.user_deleted,
                chatroom_uuid: data.chatroom_uuid,
                ts_created: data.ts_created,
                user_created: data.user_created,
                rentity_type_id: ((_a = data.rentity_type) === null || _a === void 0 ? void 0 : _a.rentity_type_id) || null,
                rentity_type_name: ((_b = data.rentity_type) === null || _b === void 0 ? void 0 : _b.rentity_type_name) || null,
                rentity_type_label: ((_c = data.rentity_type) === null || _c === void 0 ? void 0 : _c.rentity_type_label) || null,
                entity_attr: data.entity_attrs.map((attr) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                    return ({
                        entity_attr_id: attr.entity_attr_id,
                        rattr_type: ((_a = attr.rattr) === null || _a === void 0 ? void 0 : _a.rattr_type) || null,
                        rattr_name: ((_b = attr.rattr) === null || _b === void 0 ? void 0 : _b.rattr_name) || null,
                        rattr_label: ((_c = attr.rattr) === null || _c === void 0 ? void 0 : _c.rattr_label) || null,
                        rattr_view: ((_d = attr.rattr) === null || _d === void 0 ? void 0 : _d.rattr_view) || null,
                        entity_attr_value: attr.entity_attr_value,
                        rattr_no: ((_e = attr.rattr) === null || _e === void 0 ? void 0 : _e.rattr_no) || null,
                        rattr_group_id: ((_f = attr.rattr) === null || _f === void 0 ? void 0 : _f.rattr_group_id) || null,
                        rattr_group_name: ((_h = (_g = attr.rattr) === null || _g === void 0 ? void 0 : _g.rattr_group) === null || _h === void 0 ? void 0 : _h.rattr_group_name) || null,
                        rattr_group_label: ((_k = (_j = attr.rattr) === null || _j === void 0 ? void 0 : _j.rattr_group) === null || _k === void 0 ? void 0 : _k.rattr_group_label) || null,
                        rattr: attr.rattr_id,
                        entity: data.entity_id,
                    });
                }),
                entity_stage: data.entity_stages.map((stage) => {
                    var _a, _b, _c;
                    return ({
                        entity_stage_id: stage.entity_stage_id,
                        rstage_id: ((_a = stage.rstage) === null || _a === void 0 ? void 0 : _a.rstage_id) || null,
                        ts_created: stage.ts_created,
                        user_created: stage.user_created,
                        rstage_name: ((_b = stage.rstage) === null || _b === void 0 ? void 0 : _b.rstage_name) || null,
                        rstage_label: ((_c = stage.rstage) === null || _c === void 0 ? void 0 : _c.rstage_label) || null,
                    });
                }),
            });
        });
        res.status(200).json(formattedData); // Отправляем преобразованный массив
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getEntityByType = getEntityByType;
const getEntityByTypeByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rentity_type_name, id } = req.params;
        console.log(rentity_type_name);
        const listEntity = yield entity.findAll({
            where: { entity_id: id },
            include: [
                {
                    model: ref_entity_type,
                    as: "rentity_type",
                    required: false,
                    attributes: [
                        "rentity_type_id",
                        "rentity_type_name",
                        "rentity_type_label",
                        "rroute_id",
                    ],
                    where: {
                        rentity_type_name: rentity_type_name, // Замените 'some_value' на нужное значение
                    },
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
                                    attributes: [
                                        "rattr_group_name",
                                        "rattr_group_label",
                                        "rattr_group_id",
                                    ],
                                },
                            ],
                        },
                    ],
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
            order: [
                ["ts_created", "DESC"],
                [
                    { model: entity_attr, as: "entity_attrs" },
                    { model: ref_attr, as: "rattr" },
                    "rattr_no",
                    "ASC",
                ],
            ],
        });
        //преобразуем данные для вывода в нужном формате
        const formattedData = listEntity.map((data) => {
            var _a, _b, _c;
            return ({
                entity_id: data.entity_id,
                ts_deleted: data.ts_deleted,
                user_deleted: data.user_deleted,
                chatroom_uuid: data.chatroom_uuid,
                ts_created: data.ts_created,
                user_created: data.user_created,
                rentity_type_id: ((_a = data.rentity_type) === null || _a === void 0 ? void 0 : _a.rentity_type_id) || null,
                rentity_type_name: ((_b = data.rentity_type) === null || _b === void 0 ? void 0 : _b.rentity_type_name) || null,
                rentity_type_label: ((_c = data.rentity_type) === null || _c === void 0 ? void 0 : _c.rentity_type_label) || null,
                entity_attr: data.entity_attrs.map((attr) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                    return ({
                        entity_attr_id: attr.entity_attr_id,
                        rattr_type: ((_a = attr.rattr) === null || _a === void 0 ? void 0 : _a.rattr_type) || null,
                        rattr_name: ((_b = attr.rattr) === null || _b === void 0 ? void 0 : _b.rattr_name) || null,
                        rattr_label: ((_c = attr.rattr) === null || _c === void 0 ? void 0 : _c.rattr_label) || null,
                        rattr_view: ((_d = attr.rattr) === null || _d === void 0 ? void 0 : _d.rattr_view) || null,
                        entity_attr_value: attr.entity_attr_value,
                        rattr_no: ((_e = attr.rattr) === null || _e === void 0 ? void 0 : _e.rattr_no) || null,
                        rattr_group_id: ((_f = attr.rattr) === null || _f === void 0 ? void 0 : _f.rattr_group_id) || null,
                        rattr_group_name: ((_h = (_g = attr.rattr) === null || _g === void 0 ? void 0 : _g.rattr_group) === null || _h === void 0 ? void 0 : _h.rattr_group_name) || null,
                        rattr_group_label: ((_k = (_j = attr.rattr) === null || _j === void 0 ? void 0 : _j.rattr_group) === null || _k === void 0 ? void 0 : _k.rattr_group_label) || null,
                        rattr: attr.rattr_id,
                        entity: data.entity_id,
                    });
                }),
                entity_stage: data.entity_stages.map((stage) => {
                    var _a, _b, _c;
                    return ({
                        entity_stage_id: stage.entity_stage_id,
                        rstage_id: ((_a = stage.rstage) === null || _a === void 0 ? void 0 : _a.rstage_id) || null,
                        ts_created: stage.ts_created,
                        user_created: stage.user_created,
                        rstage_name: ((_b = stage.rstage) === null || _b === void 0 ? void 0 : _b.rstage_name) || null,
                        rstage_label: ((_c = stage.rstage) === null || _c === void 0 ? void 0 : _c.rstage_label) || null,
                    });
                }),
            });
        });
        res.status(200).json(formattedData); // Отправляем преобразованный массив
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getEntityByTypeByID = getEntityByTypeByID;
const updateEntityAttr = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entity_id = req.params.id;
        const rez = req.body.ref_attr.map((attr) => {
            return {
                entity_attr_id: attr.entity_attr_id,
                entity_attr_value: attr.entity_attr_value,
            };
        });
        for (const update of rez) {
            yield entity_attr.update({ entity_attr_value: update.entity_attr_value }, { where: { entity_attr_id: update.entity_attr_id } });
        }
        res.status(200).json({ message: "Entity attribute updated successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.updateEntityAttr = updateEntityAttr;
