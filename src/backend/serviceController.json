const {
  getActiveServices,
  getServiceById
} = require("../services/firestoreService");
 
/**
* Obtiene los servicios disponibles.
*/
async function listServices() {
  return getActiveServices();
}
 
/**
* Obtiene un servicio específico.
*/
async function findService(serviceId) {
  return getServiceById(serviceId);
}
 
module.exports = {
  listServices,
  findService
};
