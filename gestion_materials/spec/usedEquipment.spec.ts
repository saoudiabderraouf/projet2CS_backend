import { createConnection, getConnection, InsertResult } from "typeorm";
import { Equipment } from "../src/entity/Equipment";
import { Task } from "../src/entity/Task";
import { UsedEquipment } from "../src/entity/UsedEquipment";
const request = require("supertest");
const usedEquiID = "7c7e9f64-2ac7-4b72-827a-5f072e198341";

describe("Service Test - UsedEquipments - 🧪 : ", () => {
  beforeAll(() => {
    console.log("FirstCall");
    return createConnection({
      name: "default",
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [Equipment, Task, UsedEquipment],
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

    it("Calls create method for the equipments URI ", () => {
      request("http://localhost:8080")
        .post("/usedEquipment")
        .send({
          description: "Un équipement à utiliser par Jasmine !",
          quantity: 20,
          equipment: "282d4458-aaeb-4e92-a674-12320b1de46a",
          taskUUID: "969f0417-0611-4f7c-9fc3-1f4b3ca22573",
        })
        .expect("Content-Type", /json/)
        .expect(200);
    });

    it("Calls get method for all the equipments URI ", () => {
      request("http://localhost:8080")
        .get(`/usedEquipment/`)
        .expect("Content-Type", /json/)
        .expect(200);
    });

    it("Calls get method for one equipments URI ", () => {
      request("http://localhost:8080")
        .get(`/usedEquipment/${usedEquiID}`)
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("CRUD Operation on the DB 📊", () => {
    it("Stores & Read & Updates new used equipment", async () => {
      const equipExpectedToRead = Equipment.create({
        equipmentName: "Equipment to read",
        unitPrice: 1000,
        category: "Liquide",
      });
      // Creation
      await equipExpectedToRead.save();

      const equipResultRead = await Equipment.findOneOrFail({
        equipmentName: "Equipment to read",
      });
      // Test Read
      expect(equipExpectedToRead).toEqual(equipResultRead);
      equipResultRead.category = "CategoryTestUpdated";
      const equipExpectedToUpdate = equipResultRead;

      // Test Updated
      const equipResultUpdate = await equipResultRead.save();
      expect(equipExpectedToUpdate).toEqual(equipResultUpdate);
    });

    it("Delete a used equipment", async () => {
      const equipData = Equipment.create({
        equipmentName: "Equipment to delete",
        unitPrice: 1000,
        category: "Liquide",
      });
      await equipData.save();

      const equipExpected = await Equipment.findOneOrFail({
        equipmentName: "Equipment to delete",
      });

      const equipRemoved = await equipExpected.remove();

      expect(equipRemoved.idEquipment).toBeUndefined;
    });
  });
});
