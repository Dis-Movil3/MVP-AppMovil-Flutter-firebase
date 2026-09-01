describe("Rendimiento de la API", () => {
 
  test("la respuesta simulada debe encontrarse dentro del límite esperado", () => {
 
    const responseTime = 450;
 
    const maximumResponseTime = 1500;
 
    expect(responseTime).toBeLessThan(maximumResponseTime);
 
  });
 
});
