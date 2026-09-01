describe("API Response", () => {
 
  test("debe generar una respuesta exitosa", () => {
 
    const response = {
      success: true,
      message: "Operación exitosa",
      data: null
    };
 
    expect(response.success).toBe(true);
    expect(response).toHaveProperty("message");
    expect(response).toHaveProperty("data");
 
  });
 
  test("debe indicar cuando una operación falla", () => {
 
    const response = {
      success: false,
      message: "Error interno del servidor",
      data: null
    };
 
    expect(response.success).toBe(false);
    expect(response).toHaveProperty("message");
 
  });
 
});
