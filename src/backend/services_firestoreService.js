// Podemos separar la lógica de Firestore:


const admin = require("firebase-admin");
 
const db = admin.firestore();
 
/**
* Obtiene todos los servicios activos.
*/
async function getActiveServices() {
  const snapshot = await db
    .collection("services")
    .where("active", "==", true)
    .get();
 
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
}
 
/**
* Obtiene un servicio por ID.
*/
async function getServiceById(serviceId) {
  const document = await db
    .collection("services")
    .doc(serviceId)
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
  getActiveServices,
  getServiceById
};
