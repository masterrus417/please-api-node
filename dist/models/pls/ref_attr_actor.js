"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_attr_actor = void 0;
const sequelize_1 = require("sequelize");
class ref_attr_actor extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_attr_actor.init({
            rattr_actor_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rattr_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "какой атрибут",
                references: {
                    model: 'ref_attr',
                    key: 'rattr_id'
                }
            },
            ractor_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "какой актор",
                references: {
                    model: 'ref_actor',
                    key: 'ractor_id'
                }
            },
            rstage_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "на каком конкретном этапе (NULL=на всех)",
                references: {
                    model: 'ref_stage',
                    key: 'rstage_id'
                }
            }
        }, {
            sequelize,
            tableName: 'ref_attr_actor',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_attr_actor_idx",
                    fields: [
                        { name: "rattr_id" },
                    ]
                },
                {
                    name: "ref_attr_actor_idx1",
                    fields: [
                        { name: "ractor_id" },
                    ]
                },
                {
                    name: "ref_attr_actor_idx2",
                    fields: [
                        { name: "rstage_id" },
                    ]
                },
                {
                    name: "ref_attr_actor_pkey",
                    unique: true,
                    fields: [
                        { name: "rattr_actor_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_attr_actor = ref_attr_actor;
