"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AuthUserController_1 = require("../controllers/AuthUserController");
var router = express_1.default.Router();
router.get('/users', AuthUserController_1.getAllUsers);
exports.default = router;
