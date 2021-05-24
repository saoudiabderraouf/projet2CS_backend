import { createConnection, getConnection, InsertResult } from "typeorm";
import { Equipment } from "../src/entity/Equipment";
import { Task } from "../src/entity/Task";
import { UsedEquipment } from "../src/entity/UsedEquipment";
const request = require("supertest");

describe("Service Test 🧪 : ", () => {
  beforeEach(() => {
    return createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [Equipment, Task, UsedEquipment],
      synchronize: true,
      logging: false,
    });
  });

  afterEach(() => {
    let conn = getConnection();
    return conn.close();
  });

  it("Returns welcome body successfully", (done) => {
    request("http://localhost:8080")
      .get("/")
      .expect(200)
      .end((err: Error, res: Response) => {
        if (err) {
          console.log(err);
        }
        const resultData = res.text;
        const expectedData = "<h1> Welcome To Material Service 🤝 </h1>";
        expect(resultData).toEqual(expectedData);
        done();
      });
  });

  it("Stores New Equipment Model 🥊😅", async () => {
    const equipData = await Equipment.insert({
      equipmentName: "Huile",
      unitPrice: 1000,
      category: "Liquide",
    });
    const result = equipData.identifiers[0];

    const [equipExpected] = await Equipment.find();

    expect(result.idEquipment).toEqual(equipExpected.idEquipment);
  });
});
