const admin = require("firebase-admin");
 
/**
* Obtiene la información básica de un usuario.
*/
async function getUser(userId) {
  const document = await admin
    .firestore()
    .collection("users")
    .doc(userId)
    .get();
 
  if (!document.exists) {
    return null;
  }
 
  return {
    id: document.id,
    ...document.data()
  };
}
 
module.exports = {
  getUser
};
