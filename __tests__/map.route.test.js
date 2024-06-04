const request = require("supertest");

const app = require("../functions/app");

describe("GET /api/lines", () => {

  let busLine = null;

  it("should return a list of lines", async () => {
    const response = await request(app).get(`/api/lines`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    busLine = response.body[Math.floor(Math.random() * response.body.length)];
  });

  it("should return a list of bus stops for a line", async () => {
    const response = await request(app).get(`/api/stops/${busLine}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(0);
  });

  it("should return a list of ways for a line", async () => {
    const response = await request(app).get(`/api/ways/${busLine}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(0);
  });

  it("should return a list of bus stops", async () => {
    const response = await request(app).get(`/api/busStops`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should return a list of bus lines", async () => {
    const response = await request(app).get(`/api/busLines`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should return a list of bus lines", async () => {
    const response = await request(app).get(`/api/busLines2`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should return a list of line types", async () => {
    const response = await request(app).get(`/api/lineTypes`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  afterAll(function (done) {
    app.close(done)
  });

});
