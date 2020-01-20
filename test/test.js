var request = require("supertest");
var app = require("../index.js");
describe("GET /", function() {
  it("respond with Jenkins and GitHub", function(done) {
    //navigate to root and check the the response is "Jenkins and GitHub"
    request(app)
      .get("/")
      .expect("Jenkins and GitHub", done);
  });
});
