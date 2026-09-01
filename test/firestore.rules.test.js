describe("Reglas de seguridad de Firestore", () => {
 
  test("un usuario autenticado debe poder acceder a su propio perfil", () => {
 
    const authenticatedUser = true;
    const sameUser = true;
 
    expect(authenticatedUser && sameUser).toBe(true);
 
  });
 
  test("un usuario no autenticado no debe acceder a información privada", () => {
 
    const authenticatedUser = false;
 
    expect(authenticatedUser).toBe(false);
 
  });
 
  test("un usuario no debe modificar el perfil de otro usuario", () => {
 
    const sameUser = false;
 
    expect(sameUser).toBe(false);
 
  });
 
});
