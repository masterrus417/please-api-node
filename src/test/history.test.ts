import request from "supertest";
import app from "../app";
import { JWT_TOKEN, base_url } from "./testConfig";

describe(`GET ${base_url}/api/v1/history/53`, () => {
  test("should respond with status 200 and return list of history events", async () => {
    const response = await request(app)
      .get("/api/v1/history/53")
      .set("Authorization", `Bearer ${JWT_TOKEN}`);

    expect(response.status).toBe(200);
  });
});
