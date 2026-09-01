// Podemos documentar y preparar las operaciones relacionadas con Authentication:


const admin = require("firebase-admin");
 
/**
* Obtiene información de un usuario mediante su UID.
*/
async function getUserById(uid) {
  return admin.auth().getUser(uid);
}
 
/**
* Crea un usuario desde el backend.
*
* Esta función está pensada para operaciones administrativas.
* Para el registro normal del usuario se recomienda utilizar
* Firebase Authentication desde el cliente.
*/
async function createUser(email, password, displayName) {
  return admin.auth().createUser({
    email,
    password,
    displayName
  });
}
 
module.exports = {
  getUserById,
  createUser
};
