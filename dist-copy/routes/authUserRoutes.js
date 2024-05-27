"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authUserController_1 = require("../controllers/authUserController");
const authUserRouter = (0, express_1.Router)();
// Маршрут для регистрации пользователя
authUserRouter.post('/register', authUserController_1.registerUser);
exports.default = authUserRouter;
