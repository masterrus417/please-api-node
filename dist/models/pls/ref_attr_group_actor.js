"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_attr_group_actor = void 0;
const sequelize_1 = require("sequelize");
class ref_attr_group_actor extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_attr_group_actor.init({
            rattr_group_actor_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rattr_group_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "в какой группе атрибутов",
                references: {
                    model: 'ref_attr_group',
                    key: 'rattr_group_id'
                }
            },
            ractor_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "какой актор (роль)",
                references: {
                    model: 'ref_actor',
                    key: 'ractor_id'
                }
            },
            can_edit: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
                comment: "может редактировать все атрибуты в этой группе (по умолчанию нет)"
            },
            can_read: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: true,
                comment: "может видеть атрибуты в этой группе (по умолчанию да)"
            }
        }, {
            sequelize,
            tableName: 'ref_attr_group_actor',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_attr_group_actor_idx",
                    fields: [
                        { name: "ractor_id" },
                    ]
                },
                {
                    name: "ref_attr_group_actor_idx1",
                    fields: [
                        { name: "rattr_group_id" },
                    ]
                },
                {
                    name: "ref_attr_group_actor_pkey",
                    unique: true,
                    fields: [
                        { name: "rattr_group_actor_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_attr_group_actor = ref_attr_group_actor;
