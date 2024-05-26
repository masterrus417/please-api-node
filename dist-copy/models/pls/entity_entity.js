"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity_entity = void 0;
const sequelize_1 = require("sequelize");
class entity_entity extends sequelize_1.Model {
    static initModel(sequelize) {
        return entity_entity.init({
            ent_ent_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                comment: "уникальный ключ связки",
                primaryKey: true
            },
            entity_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "сущность_родитель",
                references: {
                    model: 'entity',
                    key: 'entity_id'
                }
            },
            entity_id_link: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "сущность_дитя",
                references: {
                    model: 'entity',
                    key: 'entity_id'
                }
            },
            ts_created: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            ts_deleted: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            user_created: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            user_deleted: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'entity_entity',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "entity_entity_pkey",
                    unique: true,
                    fields: [
                        { name: "ent_ent_id" },
                    ]
                },
            ]
        });
    }
}
exports.entity_entity = entity_entity;
