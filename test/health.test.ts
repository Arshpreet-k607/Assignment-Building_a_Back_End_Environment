import request from "supertest";
import app from "../src/app";
import { describe, it, expect } from "@jest/globals";

describe("Health check endpoint", () => {
  it("should return API health status", async () => {
    const res = await request(app).get("/api/v1/health");

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(res.body.apiVersion).toBe("v1");
    expect(res.body.message).toBeDefined();
  });
});
