"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth_group = void 0;
const sequelize_1 = require("sequelize");
class auth_group extends sequelize_1.Model {
    static initModel(sequelize) {
        return auth_group.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(150),
                allowNull: false,
                unique: "auth_group_name_key"
            }
        }, {
            sequelize,
            tableName: 'auth_group',
            schema: 'auth',
            timestamps: false,
            indexes: [
                {
                    name: "auth_group_name_a6ea08ec_like",
                    fields: [
                        { name: "name" },
                    ]
                },
                {
                    name: "auth_group_name_key",
                    unique: true,
                    fields: [
                        { name: "name" },
                    ]
                },
                {
                    name: "auth_group_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
    }
}
exports.auth_group = auth_group;
