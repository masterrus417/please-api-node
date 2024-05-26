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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const auth_user_1 = require("../models/auth/auth_user");
// Получение всех пользователей
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield auth_user_1.auth_user.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getUsers = getUsers;
// Получение пользователя по ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_user_1.auth_user.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getUserById = getUserById;
// Создание нового пользователя
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield auth_user_1.auth_user.create(req.body);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
});
exports.createUser = createUser;
// Обновление пользователя
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_user_1.auth_user.findByPk(req.params.id);
        if (user) {
            yield user.update(req.body);
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
});
exports.updateUser = updateUser;
// Удаление пользователя
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_user_1.auth_user.findByPk(req.params.id);
        if (user) {
            yield user.destroy();
            res.status(204).json();
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.deleteUser = deleteUser;
// Регистрация нового пользователя
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, first_name, last_name, is_superuser, is_staff, is_active } = req.body;
    try {
        // Проверка наличия пользователя с таким же именем пользователя или email
        const existingUser = yield auth_user_1.auth_user.findOne({ where: { username } });
        const existingEmail = yield auth_user_1.auth_user.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ error: 'Username already exists' });
            return;
        }
        if (existingEmail) {
            res.status(400).json({ error: 'Email already exists' });
            return;
        }
        // Создание нового пользователя
        const newUser = yield auth_user_1.auth_user.create({
            username,
            password,
            email,
            first_name,
            last_name,
            is_superuser: is_superuser || false,
            is_staff: is_staff || false,
            is_active: is_active || true,
            date_joined: new Date()
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.registerUser = registerUser;
