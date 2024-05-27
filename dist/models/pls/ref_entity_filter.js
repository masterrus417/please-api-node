"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_entity_filter = void 0;
const sequelize_1 = require("sequelize");
class ref_entity_filter extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_entity_filter.init({
            rentity_filter_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            rentity_type_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "у какого сущности",
                references: {
                    model: 'ref_entity_type',
                    key: 'rentity_type_id'
                }
            },
            rentity_filter_name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            rentity_filter_label: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ref_entity_filter',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_entity_filter_idx",
                    fields: [
                        { name: "rentity_type_id" },
                    ]
                },
                {
                    name: "ref_entity_filter_pkey",
                    unique: true,
                    fields: [
                        { name: "rentity_filter_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_entity_filter = ref_entity_filter;
