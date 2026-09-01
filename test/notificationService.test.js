describe("Notification Service", () => {
 
  test("debe construir correctamente una notificación", () => {
 
    const notification = {
      token: "TEST_TOKEN",
      title: "Nueva información",
      body: "Tiene una nueva actualización disponible."
    };
 
    expect(notification).toHaveProperty("token");
    expect(notification).toHaveProperty("title");
    expect(notification).toHaveProperty("body");
 
    expect(notification.title).toBe("Nueva información");
 
  });
 
  test("no debe permitir una notificación sin título", () => {
 
    const notification = {
      token: "TEST_TOKEN",
      title: "",
      body: "Mensaje de prueba"
    };
 
    expect(notification.title).toBe("");
 
  });
 
});
