"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.js
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const apiV1Routers_1 = __importDefault(require("./routes/apiV1Routers"));
const loggetMiddleware_1 = __importDefault(require("./middleware/loggetMiddleware"));
const app = (0, express_1.default)();
const port = 3000;
// Мидлвары
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(loggetMiddleware_1.default);
// Обработка ошибок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});
// Конфигурация маршрутов
app.use("/auth", authRoutes_1.default); // Маршрут для аутентификации
app.use("/api/v1", apiV1Routers_1.default); // Маршрут для API
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
exports.default = app;
