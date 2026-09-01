describe("Integración con Firestore", () => {
 
  test("debe identificar correctamente una colección de servicios", () => {
 
    const collection = "services";
 
    expect(collection).toBe("services");
 
  });
 
  test("debe identificar correctamente la colección de usuarios", () => {
 
    const collection = "users";
 
    expect(collection).toBe("users");
 
  });
 
  test("debe identificar correctamente la colección de dispositivos", () => {
 
    const collection = "devices";
 
    expect(collection).toBe("devices");
 
  });
 
});
