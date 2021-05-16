const io = require("socket.io-client");

describe("vehicle connection", function() {

    beforeAll(function(done) {
        this.socket = io("http://127.0.0.1:8000/", {
            path: "/socket"
        });

        this.socket.on("connect_error", function() {
            fail("an error occured while connecting");
            done()
        })
        this.socket.on("connect", function() {
            done()
        })
    })

    it("should fail to register vehicle", function(done) {
        this.socket.emit("connected vehicule", {id: "hello"});

        this.socket.on("error", function(msg) {
            expect(msg).toBe({ message: "Couldn't connect: Invalid id"})
            done()            
        })
    })
})