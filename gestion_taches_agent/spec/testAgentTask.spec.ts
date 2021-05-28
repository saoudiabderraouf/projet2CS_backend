import { createConnection, getConnection, InsertResult } from "typeorm";
import { Task } from "../src/entity/Task";
import { UsedEquipment } from "../src/entity/UsedEquipment";
const request = require("supertest");

describe("Service Test - Equipments - 🧪 : ", () => {
  beforeAll(() => {
    console.log("FirstCall");
    return createConnection({
      name: "default",
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [Task, UsedEquipment],
      synchronize: true,
      logging: false,
    });
  });

  afterAll(() => {
    console.log("LastCall");
    let conn = getConnection();
    return conn.close();
  });

  describe("API Calls Test 📢", () => {
    it("Returns welcome body successfully", () => {
      request("http://localhost:8080").get("/").expect(200);
    });
  });

  describe("CRUD Operation on the DB 📊", () => {});
});
