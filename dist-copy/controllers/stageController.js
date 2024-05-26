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
exports.complitedStage = exports.getStageActionByEntityID = exports.getStageByEntityID = void 0;
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
const { ref_stage, entity_stage, ref_action, ref_stage_action, ref_stage_action_stage, } = database_1.modelsPls;
const getStageByEntityID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const stages = yield entity_stage.findAll({
            where: {
                [sequelize_1.Op.and]: [{ entity_id: id }, (0, sequelize_1.literal)("ts_action IS NULL")],
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
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getStageByEntityID = getStageByEntityID;
const getStageActionByEntityID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const stages = yield entity_stage.findAll({
            where: {
                [sequelize_1.Op.and]: [{ entity_id: id }, (0, sequelize_1.literal)("ts_action IS NULL")],
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
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getStageActionByEntityID = getStageActionByEntityID;
const complitedStage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id, raction_id } = req.params;
        //обновляем этап вставляем действие
        const stage = yield entity_stage.update({
            ts_action: new Date(),
            user_action: (_a = req.user) === null || _a === void 0 ? void 0 : _a.username,
            raction_id: parseInt(raction_id),
        }, { where: { entity_stage_id: id } });
        // Выполняем дополнительный запрос для получения обновленной записи
        const updatedEntity = yield entity_stage.findOne({
            where: { entity_stage_id: id },
        });
        //получаем список актуальных этапо у текущей сущности
        const current_stages = yield entity_stage.findAll({
            where: {
                [sequelize_1.Op.and]: [
                    { entity_id: updatedEntity === null || updatedEntity === void 0 ? void 0 : updatedEntity.entity_id },
                    (0, sequelize_1.literal)("ts_action IS NULL"),
                ],
            },
            attributes: ["rstage_id"],
        });
        //получаем этапы который необходимо создать
        const new_stage = yield ref_stage_action.findAll({
            where: { raction_id: raction_id, rstage_id: updatedEntity === null || updatedEntity === void 0 ? void 0 : updatedEntity.rstage_id },
            attributes: ["rstage_action_id"],
            include: [
                {
                    model: ref_stage_action_stage,
                    as: "ref_stage_action_stages",
                    attributes: ["rstage_id"],
                    required: true,
                },
            ],
        });
        const new_rstage_id = new_stage
            .map((stage) => stage.ref_stage_action_stages.map((stages) => stages.rstage_id))
            .flat();
        //создадим массив для вставки
        const insertData = new_rstage_id.map((stage) => {
            var _a;
            return ({
                entity_id: updatedEntity === null || updatedEntity === void 0 ? void 0 : updatedEntity.entity_id,
                rstage_id: stage,
                ts_created: new Date(),
                user_created: (_a = req.user) === null || _a === void 0 ? void 0 : _a.username,
            });
        });
        yield entity_stage.bulkCreate(insertData);
        res.status(200).json({ message: "Stage completed successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.complitedStage = complitedStage;
