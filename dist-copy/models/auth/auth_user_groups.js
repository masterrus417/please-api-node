"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth_user_groups = void 0;
const sequelize_1 = require("sequelize");
class auth_user_groups extends sequelize_1.Model {
    static initModel(sequelize) {
        return auth_user_groups.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            user_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                unique: "auth_user_groups_user_id_group_id_94350c0c_uniq"
            },
            group_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'auth_group',
                    key: 'id'
                },
                unique: "auth_user_groups_user_id_group_id_94350c0c_uniq"
            }
        }, {
            sequelize,
            tableName: 'auth_user_groups',
            schema: 'auth',
            timestamps: false,
            indexes: [
                {
                    name: "auth_user_groups_group_id_97559544",
                    fields: [
                        { name: "group_id" },
                    ]
                },
                {
                    name: "auth_user_groups_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "auth_user_groups_user_id_6a12ed8b",
                    fields: [
                        { name: "user_id" },
                    ]
                },
                {
                    name: "auth_user_groups_user_id_group_id_94350c0c_uniq",
                    unique: true,
                    fields: [
                        { name: "user_id" },
                        { name: "group_id" },
                    ]
                },
            ]
        });
    }
}
exports.auth_user_groups = auth_user_groups;
