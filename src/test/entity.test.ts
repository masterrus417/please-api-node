import request from "supertest";
import app from "../app";
import { requestBodyEntityUpdate } from "./json";
import { JWT_TOKEN, base_url } from "./testConfig";

describe(`GET ${base_url}/api/v1/entity`, () => {
  test("should respond with status 200 and return list of entities", async () => {
    const response = await request(app)
      .get("/api/v1/entity")
      .set("Authorization", `Bearer ${JWT_TOKEN}`);

    expect(response.status).toBe(200);
  });
});

describe(`GET ${base_url}/api/v1/entity/89`, () => {
  test("should respond with status 200 and return one entity", async () => {
    const response = await request(app)
      .get("/api/v1/entity/89")
      .set("Authorization", `Bearer ${JWT_TOKEN}`);

    expect(response.status).toBe(200);
  });
});

describe(`GET ${base_url}/api/v1/entity/candidate/type`, () => {
  test("should respond with status 200 and return list of entities by type candidate", async () => {
    const response = await request(app)
      .get("/api/v1/entity/candidate/type")
      .set("Authorization", `Bearer ${JWT_TOKEN}`);

    expect(response.status).toBe(200);
  });
});

describe(`GET ${base_url}/api/v1/entity/request/type`, () => {
  test("should respond with status 200 and return list of entities by type request", async () => {
    const response = await request(app)
      .get("/api/v1/entity/request/type")
      .set("Authorization", `Bearer ${JWT_TOKEN}`);

    expect(response.status).toBe(200);
  });
});

describe(`PATCH ${base_url}/api/v1/entity/55/updated`, () => {
  test("should respond with status 200 and return message", async () => {
    const response = await request(app)
      .patch("/api/v1/entity/55/updated")
      .set("Authorization", `Bearer ${JWT_TOKEN}`)
      .send(requestBodyEntityUpdate);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
  });
});

describe(`DELETE ${base_url}/api/v1/entity/81/deleted`, () => {
  test("should respond with status 200 and return message", async () => {
    const response = await request(app)
      .delete("/api/v1/entity/81/deleted")
      .set("Authorization", `Bearer ${JWT_TOKEN}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
  });
});

describe(`POST ${base_url}/api/v1/entity/candidate/created`, () => {
  test("should respond with status 200 and return created entity", async () => {
    const response = await request(app)
      .post("/api/v1/entity/candidate/created")
      .set("Authorization", `Bearer ${JWT_TOKEN}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("entity_id");
  });
});

describe(`POST ${base_url}/api/v1/entity/request/created`, () => {
  test("should respond with status 200 and return created entity", async () => {
    const response = await request(app)
      .post("/api/v1/entity/request/created")
      .set("Authorization", `Bearer ${JWT_TOKEN}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("entity_id");
  });
});
