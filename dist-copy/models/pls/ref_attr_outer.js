"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_attr_outer = void 0;
const sequelize_1 = require("sequelize");
class ref_attr_outer extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_attr_outer.init({
            rattr_outer_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rattr_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            rattr_outer_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rattr_outer_label: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rattr_outer_fields: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                comment: "какие поля показывать при выборе из справочника"
            },
            rattr_outer_path: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                comment: "где находится этот справочник"
            },
            rattr_outer_key: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                comment: "какое поле записывается в значение атрибута"
            },
            rattr_outer_sort: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                comment: "по каким полям сортируется при отображении справочника"
            }
        }, {
            sequelize,
            tableName: 'ref_attr_outer',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_attr_outer_pkey",
                    unique: true,
                    fields: [
                        { name: "rattr_outer_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_attr_outer = ref_attr_outer;
