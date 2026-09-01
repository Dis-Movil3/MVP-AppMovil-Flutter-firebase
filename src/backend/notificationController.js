const {
  sendPushNotification
} = require("../services/notificationService");
 
/**
* Envía una notificación push.
*/
async function notifyDevice(token, title, body) {
  return sendPushNotification(token, title, body);
}
 
module.exports = {
  notifyDevice
};
