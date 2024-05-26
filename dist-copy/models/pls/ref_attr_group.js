"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_attr_group = void 0;
const sequelize_1 = require("sequelize");
class ref_attr_group extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_attr_group.init({
            rattr_group_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rattr_group_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rattr_group_label: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rattr_group_no: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true,
                comment: "порядковый номер для отображения"
            },
            rentity_type_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "указатель какой тип сущности обладает этой группа атрибутов",
                references: {
                    model: 'ref_entity_type',
                    key: 'rentity_type_id'
                }
            }
        }, {
            sequelize,
            tableName: 'ref_attr_group',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_attr_group_pkey",
                    unique: true,
                    fields: [
                        { name: "rattr_group_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_attr_group = ref_attr_group;
