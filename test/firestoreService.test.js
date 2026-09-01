describe("Firestore Service", () => {
 
  const mockServices = [
    {
      id: "service-001",
      name: "Consulta de información",
      active: true
    },
    {
      id: "service-002",
      name: "Solicitud de servicio",
      active: true
    }
  ];
 
  test("debe devolver solamente servicios activos", () => {
 
    const activeServices = mockServices.filter(
      service => service.active === true
    );
 
    expect(activeServices.length).toBe(2);
    expect(activeServices[0].active).toBe(true);
 
  });
 
  test("cada servicio debe tener un identificador", () => {
 
    mockServices.forEach(service => {
      expect(service).toHaveProperty("id");
    });
 
  });
 
});
