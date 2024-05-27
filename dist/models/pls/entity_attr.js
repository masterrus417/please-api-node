"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity_attr = void 0;
const sequelize_1 = require("sequelize");
class entity_attr extends sequelize_1.Model {
    static initModel(sequelize) {
        return entity_attr.init({
            entity_attr_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rattr_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'ref_attr',
                    key: 'rattr_id'
                }
            },
            entity_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'entity',
                    key: 'entity_id'
                }
            },
            entity_attr_value: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'entity_attr',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "entity_attr_idx",
                    fields: [
                        { name: "rattr_id" },
                    ]
                },
                {
                    name: "entity_attr_idx1",
                    fields: [
                        { name: "entity_id" },
                    ]
                },
                {
                    name: "entity_attr_pkey",
                    unique: true,
                    fields: [
                        { name: "entity_attr_id" },
                    ]
                },
            ]
        });
    }
}
exports.entity_attr = entity_attr;
