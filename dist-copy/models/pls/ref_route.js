"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref_route = void 0;
const sequelize_1 = require("sequelize");
class ref_route extends sequelize_1.Model {
    static initModel(sequelize) {
        return ref_route.init({
            rroute_id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            rroute_name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rroute_label: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            },
            rstage_id_start: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                comment: "Этап, с которого начинается этот маршрут",
                references: {
                    model: 'ref_stage',
                    key: 'rstage_id'
                }
            }
        }, {
            sequelize,
            tableName: 'ref_route',
            schema: 'pls',
            timestamps: false,
            indexes: [
                {
                    name: "ref_route_pkey",
                    unique: true,
                    fields: [
                        { name: "rroute_id" },
                    ]
                },
            ]
        });
    }
}
exports.ref_route = ref_route;
