var request = require("supertest");
var app = require("../index.js");
describe("GET /", function() {
  it("respond with Hello Guys", function(done) {
    //navigate to root and check the the response is "Hello Guys"
    request(app)
      .get("/")
      .expect("Hello Guys", done);
  });
});
