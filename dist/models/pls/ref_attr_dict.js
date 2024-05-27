"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_attr_dict = void 0;
const sequelize_1 = require("sequelize");
class ref_attr_dict extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_attr_dict.init({
            rattr_dict_id: {
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
            rattr_dict_no: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true,
                comment: "порядковый номер при отображении"
            },
            rattr_dict_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                comment: "!! После использования нельзя редактировать. Именно это поле записывается в значения атрибутов"
            },
            rattr_dict_label: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                comment: "Отображаемый текст варианта выбора"
            }
        }, {
            sequelize,
            tableName: 'ref_attr_dict',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_attr_dict_pkey",
                    unique: true,
                    fields: [
                        { name: "rattr_dict_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_attr_dict = ref_attr_dict;
