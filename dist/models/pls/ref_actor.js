"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_actor = void 0;
const sequelize_1 = require("sequelize");
class ref_actor extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_actor.init({
            ractor_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            ractor_auth_group_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
                comment: "соответствие auth.auth_groups.name"
            },
            ractor_label: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            ractor_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ref_actor',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_actor_idx",
                    fields: [
                        { name: "ractor_auth_group_name" },
                    ]
                },
                {
                    name: "ref_actor_pkey",
                    unique: true,
                    fields: [
                        { name: "ractor_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_actor = ref_actor;
