"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_entity_type = void 0;
const sequelize_1 = require("sequelize");
class ref_entity_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_entity_type.init({
            rentity_type_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rentity_type_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rentity_type_label: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rroute_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "указатель маршрута, там будет с какого этапа начинается",
                references: {
                    model: 'ref_route',
                    key: 'rroute_id'
                }
            }
        }, {
            sequelize,
            tableName: 'ref_entity_type',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "entity_types_pkey",
                    unique: true,
                    fields: [
                        { name: "rentity_type_id" },
                    ]
                },
                {
                    name: "ref_entity_type_idx",
                    fields: [
                        { name: "rroute_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_entity_type = ref_entity_type;
