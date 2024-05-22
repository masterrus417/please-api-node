import request from "supertest";
import app from "../app";
import { requestBody } from "./json";

const JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJtYXN0ZXJydXM0MTciLCJpYXQiOjE3MTYzOTM1ODYsImV4cCI6MTcxNjM5NzE4Nn0.1YKYc1amM_HOV--7VYZeeJ4NOptcMv9uWnsMikfJCXA";
const base_url = "http://localhost:3000";

describe(`GET ${base_url}/api/v1/history/53`, () => {
  test("should respond with status 200 and return list of history events", async () => {
    const response = await request(app)
      .get("/api/v1/history/53")
      .set("Authorization", `Bearer ${JWT_TOKEN}`);

    expect(response.status).toBe(200);
  });
});
