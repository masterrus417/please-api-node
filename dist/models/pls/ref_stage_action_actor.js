"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_stage_action_actor = void 0;
const sequelize_1 = require("sequelize");
class ref_stage_action_actor extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_stage_action_actor.init({
            rstage_action_actor_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rstage_action_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "указатель на этап и действие",
                references: {
                    model: 'ref_stage_action',
                    key: 'rstage_action_id'
                }
            },
            ractor_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "указатель на актора",
                references: {
                    model: 'ref_actor',
                    key: 'ractor_id'
                }
            }
        }, {
            sequelize,
            tableName: 'ref_stage_action_actor',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_stage_action_actor_idx",
                    fields: [
                        { name: "rstage_action_id" },
                    ]
                },
                {
                    name: "ref_stage_action_actor_idx1",
                    fields: [
                        { name: "ractor_id" },
                    ]
                },
                {
                    name: "ref_stage_action_actor_pkey",
                    unique: true,
                    fields: [
                        { name: "rstage_action_actor_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_stage_action_actor = ref_stage_action_actor;
