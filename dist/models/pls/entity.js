"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity = void 0;
const sequelize_1 = require("sequelize");
class entity extends sequelize_1.Model {
    static initModel(sequelize) {
        return entity.init({
            entity_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rentity_type_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "ref_entity_type",
                references: {
                    model: 'ref_entity_type',
                    key: 'rentity_type_id'
                }
            },
            ts_deleted: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
                comment: "пометка, что сущность удалена в корзину"
            },
            user_deleted: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            chatroom_uuid: {
                type: sequelize_1.DataTypes.UUID,
                allowNull: true,
                comment: "ссылка на чат в мессенджере"
            },
            ts_created: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            user_created: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'entity',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "entity_idx",
                    fields: [
                        { name: "rentity_type_id" },
                    ]
                },
                {
                    name: "entity_pkey",
                    unique: true,
                    fields: [
                        { name: "entity_id" },
                    ]
                },
            ]
        });
    }
}
exports.entity = entity;
