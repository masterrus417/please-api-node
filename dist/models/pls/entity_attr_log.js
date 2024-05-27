"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity_attr_log = void 0;
const sequelize_1 = require("sequelize");
class entity_attr_log extends sequelize_1.Model {
    static initModel(sequelize) {
        return entity_attr_log.init({
            entity_attr_log_id: {
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
                allowNull: true,
                comment: "предыдущее (до обновления) значение атрибута"
            },
            ts_change: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            user_change: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'entity_attr_log',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "entity_attr_log_pkey",
                    unique: true,
                    fields: [
                        { name: "entity_attr_log_id" },
                    ]
                },
            ]
        });
    }
}
exports.entity_attr_log = entity_attr_log;
