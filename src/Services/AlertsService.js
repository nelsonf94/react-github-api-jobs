/**
 * Show the new Alert on Screen
 */
const show = (alert) => {
  alert(alert.message);
}

/**
 * Handler the new Alert
 */
const showAlert = (alert) => {
  show(alert);
}

/**
 * Alert Service
 */
const AlertsService = {
  showAlert: showAlert
}

export default AlertsService;