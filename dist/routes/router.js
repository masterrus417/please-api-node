"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("../controllers/controller");
// Роутер
var router = express_1.default.Router();
// Маршруты
router.get('/users', controller_1.getUsers);
router.get('/users/:id', controller_1.getUserById);
exports.default = router;
