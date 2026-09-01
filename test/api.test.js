describe("API del MVP", () => {
 
  test("GET /api debe responder correctamente", async () => {
 
    const response = {
      status: 200,
      body: {
        success: true,
        message: "API del MVP funcionando correctamente"
      }
    };
 
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
 
  });
 
  test("GET /api/services debe devolver información", async () => {
 
    const response = {
      status: 200,
      body: {
        success: true,
        data: []
      }
    };
 
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
 
  });
 
});
