"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_entity_filter_attr = void 0;
const sequelize_1 = require("sequelize");
class ref_entity_filter_attr extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_entity_filter_attr.init({
            ref_entity_filter_attr_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.BIGINT,
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
            rentity_filter_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "к какому набору фильтров",
                references: {
                    model: 'ref_entity_filter',
                    key: 'rentity_filter_id'
                }
            }
        }, {
            sequelize,
            tableName: 'ref_entity_filter_attr',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_entity_filter_attr_idx",
                    fields: [
                        { name: "rattr_id" },
                    ]
                },
                {
                    name: "ref_entity_filter_attr_idx1",
                    fields: [
                        { name: "rentity_filter_id" },
                    ]
                },
                {
                    name: "ref_entity_filter_attr_pkey",
                    unique: true,
                    fields: [
                        { name: "ref_entity_filter_attr_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_entity_filter_attr = ref_entity_filter_attr;
