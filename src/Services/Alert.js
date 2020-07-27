/**
 * Show the new Alert on Screen
 */
const show = (alert) => {
  console.log(alert.message);
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
const AlertService = {
  showAlert: showAlert
}

export default AlertService;