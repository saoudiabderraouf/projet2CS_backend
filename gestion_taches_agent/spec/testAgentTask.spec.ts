import { Request, json } from "express";
import {} from 'jasmine';

var Request = require("request");
describe("Server", () => {
    // var server ; 
    // beforeAll(() => {
    //     server = require("../src/index"); 
    // }); 
    // afterAll(() => {
    //     server.close(); 
    // })

    describe("GET /", () => {
        var data;
        beforeAll((done) => {
            Request.get("http://localhost:8000/", function(response) {
                data.status = response.statusCode;
                console.log("response", response.statusCode)
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        }); 
    });
});


// import fetch from 'node-fetch';
// type Response = {
//     status: number,
//     body: any
// };


// // it("should retrieve a specific rule", function(done) { 
// //     Request({ uri: "http://localhost:8000", json: true }, function(res: Response){ 
// //         expect(res.body).toEqual("Hello, this is the agent Tasks' management service."); 
// //         // expect(body.ruleId).toEqual("test1"); 
// //     done(); 
// //     }); 
    
// // }); 

// // it("Testing to see if Jest works", () => {
// //     expect(1).toBe(1);
// //   });


// // describe('GET /', () => {
// //   var response = {} as Response;
// //   beforeAll(async () => {
// //     await fetch('http://localhost:8001', {
// //       method: 'GET',
// //       headers: {
// //         Accept: 'application/json',
// //       },
// //     }).then(async (res) => {
// //       response.status = res.status;
// //       response.body = await res.json();
// //     });
// //   });
// //   it('should be STATUS 200', () => {
// //     expect(response.status).toBe(200);
// //   });
// // //   it('should say Hello World!', () => {
// // //     expect(response.body.msg).toBe('Hello World!');
// // //   });
// // });


// var request = require("request");
// var base_url = "http://localhost:8000"

// describe("Task Server", function() {
//     describe("GET /", function() {
//         it("returns status code 200", function(done) {
//         request.get(base_url, function(response: Response) {
//             console.log("response = ", response); 
//             expect(response.status).toBe(200);
//             done();
//             });
//         });
//     });
// });

