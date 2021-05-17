import { Request, json } from "express";
import { Server } from "http";
import * as express from 'express';

interface IData {
    status?: number;
    body?: string;
}
const app = express()

let Request = require("request");
    
describe("Service Test : ", () => {
    // let service: Server;
    // beforeAll(() => {
    //     service = require("../src/index");
    //     console.log("sssssssssssssssssss", service); 
    // });
    // afterAll(() => {
    //     service.close();
    // }); /*  */

    describe("GET /", () => {
    let data: IData = {};
    beforeAll((done) => {
        Request.get(
            "http://localhost:8000",(_error: any, response: any, body: any) => {
              data.status = response.statusCode;
              data.body = body;
              console.log("GET / http://localhost:8000 : data.status = ", data.status);
              done();
            }
        );
        
    });
    it("Status 200", () => {
        expect(data.status).toBe(200);
        });
    });

    describe("GET /task", () => {
      let data: IData = {};
      beforeAll((done) => {
          Request.get(
              "http://localhost:8000/task",(_error: any, response: any, body: any) => {
                data.status = response.statusCode;
                data.body = body;
                console.log("GET / http://localhost:8000/task : data.status = ", data.status);
                done();
              }
          );
      });
      it("Status 200", () => {
          expect(data.status).toBe(200);
          });
      });

      describe("POST /task", () => {
        let data: IData = {};
        beforeAll((done) => {
            Request.get(
                "http://localhost:8000/task",(_error: any, response: any, body: any) => {
                  data.status = response.statusCode;
                  data.body = body;
                  console.log("POST / http://localhost:8000/task : data.status = ", data.status);
                  done();
                }
            );
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
            });
        });

        describe("GET /task/5", () => {
          let data: IData = {};
          beforeAll((done) => {
              Request.get(
                  "http://localhost:8000/task/5",(_error: any, response: any, body: any) => {
                    data.status = response.statusCode;
                    data.body = body;
                    console.log("GET / http://localhost:8000/task/:id : data.status = ", data.status);
                    done();
                  }
              );
          });
          it("Status 200", () => {
              expect(data.status).toBe(200);
              });
          });

          describe("PUT /task/5", () => {
            let data: IData = {};
            beforeAll((done) => {
                Request.get(
                    "http://localhost:8000/task/5",(_error: any, response: any, body: any) => {
                      data.status = response.statusCode;
                      data.body = body;
                      console.log("PUT / http://localhost:8000/task/:id : data.status = ", data.status);
                      done();
                    }
                );
            });
            it("Status 200", () => {
                expect(data.status).toBe(200);
                });
            });

            describe("DELETE /task/5", () => {
              let data: IData = {};
              beforeAll((done) => {
                  Request.get(
                      "http://localhost:8000/task/5",(_error: any, response: any, body: any) => {
                        data.status = response.statusCode;
                        data.body = body;
                        console.log("DELETE / http://localhost:8000/task/:id : data.status = ", data.status);
                        done();
                      }
                  );
              });
              it("Status 200", () => {
                  expect(data.status).toBe(200);
                  });
              });


              describe("GET /task", () => {
                let data: IData = {};
                beforeAll((done) => {
                    Request.get(
                        "http://localhost:8000/task?id=1",(_error: any, response: any, body: any) => {
                          data.status = response.statusCode;
                          data.body = body;
                          console.log("GET / http://localhost:8000/task?id=1 : data.status = ", data.status);
                          done();
                        }
                    );
                });
                it("Status 200", () => {
                    expect(data.status).toBe(200);
                    });
                });
});
