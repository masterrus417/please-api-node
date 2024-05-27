"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_stage_action = void 0;
const sequelize_1 = require("sequelize");
class ref_stage_action extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_stage_action.init({
            rstage_action_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rstage_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "на каком этапе",
                references: {
                    model: 'ref_stage',
                    key: 'rstage_id'
                }
            },
            raction_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "какое действие может выполнить",
                references: {
                    model: 'ref_action',
                    key: 'raction_id'
                }
            }
        }, {
            sequelize,
            tableName: 'ref_stage_action',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_stage_action_idx",
                    fields: [
                        { name: "rstage_id" },
                    ]
                },
                {
                    name: "ref_stage_action_idx1",
                    fields: [
                        { name: "raction_id" },
                    ]
                },
                {
                    name: "ref_stage_actor_pkey",
                    unique: true,
                    fields: [
                        { name: "rstage_action_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_stage_action = ref_stage_action;
