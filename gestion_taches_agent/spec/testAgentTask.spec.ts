const request = require("supertest");

interface IData {
  status?: number;
  body?: string | any;
}

describe("Service Test : ", () => {
  describe("Endpoint : /", () => {
    let data: IData = {};

    it("Returns welcome body successfully", (done) => {
      request("http://localhost:8000")
        .get("/")
        .expect(200)
        .end((err: Error, res: Response) => {
          if (err) {
            console.log(err);
          }
          const resultData = res.text;
          const expectedData =
            "Hello, this is the agent Tasks' management service.";
          expect(resultData).toEqual(expectedData);
          done();
        });
    });
  });
});
