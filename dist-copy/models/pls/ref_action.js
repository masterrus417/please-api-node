"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_action = void 0;
const sequelize_1 = require("sequelize");
class ref_action extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_action.init({
            raction_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            raction_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            raction_label: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ref_action',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_action_pkey",
                    unique: true,
                    fields: [
                        { name: "raction_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_action = ref_action;
