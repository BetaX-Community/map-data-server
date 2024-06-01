const request = require("supertest");

const app = require("../functions/app");

describe("GET /api/lines", () => {

  it("should return a list of lines", async () => {
    const response = await request(app).get(`/api/lines`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  afterEach(function (done) {
    app.close(done)
  });

});
