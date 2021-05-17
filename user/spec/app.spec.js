var Request = require("request");

describe("user api test", () => {
    var server;
    
    beforeAll((done) => {
        server = require("../src/index");
    });
    
    afterAll(() => {
        server.close();
    });

    it("GET /users", () => {
        
        var status;
        
        beforeAll(() => {
            Request.get("https://localhost:8000/users", (error, response, body) => {
                status = response.status;
            });
        });

        expect(status).toBe(200);
    });

    it("POST /users", () => {
        var status;
        Request.post("https://localhost:8000/users", {
            userName: "testUserName",
            firstName: "testFirstName",
            lastName: "testLastName",
            address: "testAddress",
            phoneNumber: "testPhoneNumber"
        }, (error, response, body) => {
            status = response.status;
            
            // Add the fields test
        });

        expect(status).toBe(200);
    });

    it("PUT /users/:userId", () => {
        var status;

        beforeAll(() => {
            Request.put("https://localhost:8000/users/1", {
                userName: "testUpdateUserName",
                firstName: "testUpdateFirstName",
                lastName: "testUpdateLastName",
                address: "testUpdateAddress",
                phoneNumber: "testUpdatePhoneNumber"
            }, (error, response, body) {
                status = response.status; 
            });

            expect(status).toBe(200);
        });

        it("DELETE /users/:userId", () => {
            var status;
            
            beforeAll(() => {
                Request.delete("https://localhost:8000/users/1", (error, response, body) => {
                    status = response.status;
                });
            });

            expect(status).toBe(200);
        });
    });


});