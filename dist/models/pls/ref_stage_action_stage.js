"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_stage_action_stage = void 0;
const sequelize_1 = require("sequelize");
class ref_stage_action_stage extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_stage_action_stage.init({
            rstage_action_stage_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rstage_action_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "после какого действия другого этапа",
                references: {
                    model: 'ref_stage_action',
                    key: 'rstage_action_id'
                }
            },
            rstage_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "какие новые этапы начинаются (возможна развилка и распаллеливание)",
                references: {
                    model: 'ref_stage',
                    key: 'rstage_id'
                }
            }
        }, {
            sequelize,
            tableName: 'ref_stage_action_stage',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_stage_action_stage_idx",
                    fields: [
                        { name: "rstage_action_id" },
                    ]
                },
                {
                    name: "ref_stage_action_stage_idx1",
                    fields: [
                        { name: "rstage_id" },
                    ]
                },
                {
                    name: "ref_stage_actor_stage_pkey",
                    unique: true,
                    fields: [
                        { name: "rstage_action_stage_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_stage_action_stage = ref_stage_action_stage;
