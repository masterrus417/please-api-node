"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_attr = void 0;
const sequelize_1 = require("sequelize");
class ref_attr extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_attr.init({
            rattr_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rattr_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rattr_type: {
                type: sequelize_1.DataTypes.ENUM("string", "date", "number", "dict", "outer", "longstring", "bool", "file"),
                allowNull: true
            },
            rattr_label: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                comment: "отображаемое имя"
            },
            rattr_required: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                comment: "обязательный"
            },
            rattr_system: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                comment: "служебный"
            },
            rattr_group_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "группа атрибутов",
                references: {
                    model: 'ref_attr_group',
                    key: 'rattr_group_id'
                }
            },
            rattr_no: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true,
                comment: "порядковый номер"
            },
            rattr_view: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                comment: "это атрибут используется для отображения и идентификации сущности"
            },
            rattr_multilple: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
                comment: "сущность может иметь несколько значений (копий) этого атрибута. Например, у укандидата несколько образований."
            }
        }, {
            sequelize,
            tableName: 'ref_attr',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_attr_pkey",
                    unique: true,
                    fields: [
                        { name: "rattr_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_attr = ref_attr;
