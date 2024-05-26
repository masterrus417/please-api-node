"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_stage = void 0;
const sequelize_1 = require("sequelize");
class ref_stage extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_stage.init({
            rstage_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rstage_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rstage_label: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rstage_wait_others: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                comment: "когда этап переходит на этот, если True, то всегда проверяет, есть ли потенциальные другие этапы, которые в этот переходят. Если такие есть - ждет. Если таких нет (или они закончились и перешли в этот), то включает этот этап."
            },
            rroute_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                comment: "маршрут, который объединяет все этапы",
                references: {
                    model: 'ref_route',
                    key: 'rroute_id'
                }
            },
            rentity_type_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "тип сущности, которая должна создаваться при этом этапе",
                references: {
                    model: 'ref_entity_type',
                    key: 'rentity_type_id'
                }
            }
        }, {
            sequelize,
            tableName: 'ref_stage',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_stage_idx",
                    fields: [
                        { name: "rroute_id" },
                    ]
                },
                {
                    name: "ref_stage_pkey",
                    unique: true,
                    fields: [
                        { name: "rstage_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_stage = ref_stage;
