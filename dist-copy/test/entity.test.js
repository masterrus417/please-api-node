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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const json_1 = require("./json");
const testConfig_1 = require("./testConfig");
describe(`GET ${testConfig_1.base_url}/api/v1/entity`, () => {
    test("should respond with status 200 and return list of entities", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .get("/api/v1/entity")
            .set("Authorization", `Bearer ${testConfig_1.JWT_TOKEN}`);
        expect(response.status).toBe(200);
    }));
});
describe(`GET ${testConfig_1.base_url}/api/v1/entity/89`, () => {
    test("should respond with status 200 and return one entity", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .get("/api/v1/entity/89")
            .set("Authorization", `Bearer ${testConfig_1.JWT_TOKEN}`);
        expect(response.status).toBe(200);
    }));
});
describe(`GET ${testConfig_1.base_url}/api/v1/entity/candidate/type`, () => {
    test("should respond with status 200 and return list of entities by type candidate", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .get("/api/v1/entity/candidate/type")
            .set("Authorization", `Bearer ${testConfig_1.JWT_TOKEN}`);
        expect(response.status).toBe(200);
    }));
});
describe(`GET ${testConfig_1.base_url}/api/v1/entity/request/type`, () => {
    test("should respond with status 200 and return list of entities by type request", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .get("/api/v1/entity/request/type")
            .set("Authorization", `Bearer ${testConfig_1.JWT_TOKEN}`);
        expect(response.status).toBe(200);
    }));
});
describe(`PATCH ${testConfig_1.base_url}/api/v1/entity/55/updated`, () => {
    test("should respond with status 200 and return message", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .patch("/api/v1/entity/55/updated")
            .set("Authorization", `Bearer ${testConfig_1.JWT_TOKEN}`)
            .send(json_1.requestBodyEntityUpdate);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("message");
    }));
});
describe(`DELETE ${testConfig_1.base_url}/api/v1/entity/81/deleted`, () => {
    test("should respond with status 200 and return message", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .delete("/api/v1/entity/81/deleted")
            .set("Authorization", `Bearer ${testConfig_1.JWT_TOKEN}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("message");
    }));
});
describe(`POST ${testConfig_1.base_url}/api/v1/entity/candidate/created`, () => {
    test("should respond with status 200 and return created entity", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/entity/candidate/created")
            .set("Authorization", `Bearer ${testConfig_1.JWT_TOKEN}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("entity_id");
    }));
});
describe(`POST ${testConfig_1.base_url}/api/v1/entity/request/created`, () => {
    test("should respond with status 200 and return created entity", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/entity/request/created")
            .set("Authorization", `Bearer ${testConfig_1.JWT_TOKEN}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("entity_id");
    }));
});
