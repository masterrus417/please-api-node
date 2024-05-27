"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entity_stage = void 0;
const sequelize_1 = require("sequelize");
class entity_stage extends sequelize_1.Model {
    static initModel(sequelize) {
        return entity_stage.init({
            entity_stage_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rstage_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "из справочника этапов",
                references: {
                    model: 'ref_stage',
                    key: 'rstage_id'
                }
            },
            entity_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "какая сущность соединена с этим этапом",
                references: {
                    model: 'entity',
                    key: 'entity_id'
                }
            },
            ts_action: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
                comment: "метка времени выполнения действия"
            },
            raction_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "какое действие было выбрано на этом этапе",
                references: {
                    model: 'ref_action',
                    key: 'raction_id'
                }
            },
            user_action: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                comment: "какой пользователь  djnago_auth выбрал действие"
            },
            ts_created: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            user_created: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'entity_stage',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "entity_stage_idx",
                    fields: [
                        { name: "rstage_id" },
                    ]
                },
                {
                    name: "entity_stage_idx1",
                    fields: [
                        { name: "entity_id" },
                    ]
                },
                {
                    name: "entity_stage_idx2",
                    fields: [
                        { name: "raction_id" },
                    ]
                },
                {
                    name: "entity_stage_pkey",
                    unique: true,
                    fields: [
                        { name: "entity_stage_id" },
                    ]
                },
            ]
        });
    }
}
exports.entity_stage = entity_stage;
