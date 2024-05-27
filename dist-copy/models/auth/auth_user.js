"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth_user = void 0;
const sequelize_1 = require("sequelize");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class auth_user extends sequelize_1.Model {
    static initModel(sequelize) {
        return auth_user.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            password: {
                type: sequelize_1.DataTypes.STRING(128),
                allowNull: false
            },
            last_login: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            is_superuser: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            },
            username: {
                type: sequelize_1.DataTypes.STRING(150),
                allowNull: false,
                unique: "auth_user_username_key"
            },
            first_name: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            last_name: {
                type: sequelize_1.DataTypes.STRING(150),
                allowNull: true
            },
            email: {
                type: sequelize_1.DataTypes.STRING(254),
                allowNull: false
            },
            is_staff: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            },
            is_active: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            },
            date_joined: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            where_come: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
        }, {
            sequelize,
            tableName: 'auth_user',
            schema: 'auth',
            timestamps: false,
            indexes: [
                {
                    name: "auth_user_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
                {
                    name: "auth_user_username_6821ab7c_like",
                    fields: [
                        { name: "username" },
                    ]
                },
                {
                    name: "auth_user_username_key",
                    unique: true,
                    fields: [
                        { name: "username" },
                    ]
                },
            ],
            hooks: {
                beforeCreate: (user) => __awaiter(this, void 0, void 0, function* () {
                    user.password = yield bcryptjs_1.default.hash(user.password, 10);
                }),
                beforeUpdate: (user) => __awaiter(this, void 0, void 0, function* () {
                    if (user.changed('password')) {
                        user.password = yield bcryptjs_1.default.hash(user.password, 10);
                    }
                })
            }
        });
    }
}
exports.auth_user = auth_user;
