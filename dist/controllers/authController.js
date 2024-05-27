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
exports.login = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const JWTconf_1 = require("../config/JWTconf");
const database_1 = require("../config/database");
const { auth_user } = database_1.modelsAuth;
// Регистрация нового пользователя
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, first_name, last_name } = req.body;
    try {
        // Проверка наличия пользователя с таким же именем пользователя или email
        const existingUser = yield auth_user.findOne({ where: { username } });
        const existingEmail = yield auth_user.findOne({ where: { email } });
        if (!username || !password || !email) {
            res
                .status(400)
                .json({ error: "Username, password, and email are required" });
            return;
        }
        if (existingUser) {
            res.status(400).json({ error: "Username already exists" });
            return;
        }
        if (existingEmail) {
            res.status(400).json({ error: "Email already exists" });
            return;
        }
        // Создание нового пользователя
        const newUser = yield auth_user.create({
            username,
            password,
            email,
            first_name,
            last_name,
            is_superuser: false,
            is_staff: false,
            is_active: true,
            date_joined: new Date(),
            where_come: "node js backend",
        });
        const customResponse = {
            username: newUser.username,
            email: newUser.email,
            state: "Registred success",
        };
        res.status(201).json(customResponse);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log(error);
    }
});
exports.registerUser = registerUser;
// Аутентификация пользователя
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ message: "Username and password are required" });
    }
    try {
        const user = yield auth_user.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid username or password" });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, JWTconf_1.jwtSecret, { expiresIn: JWTconf_1.jwtExpiry });
        res.json({ token });
    }
    catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.login = login;
