<script>
  import { alerts, ALERT_TYPES } from "../lib/alertStore.js";
  import { afterNavigate } from "$app/navigation"

  let alertType = null
  let alertMessage = null
  let alertBackgroundColor = ""; // Initialize the background color variable

  // setting our local alertType and alertMessage whenever alerts.setAlert is called
  $: if ($alerts.type && $alerts.message) {
      alertType = $alerts.type
      alertMessage = $alerts.message
      resetAlerts(); // Reset the timer whenever a new alert is set
  }

  // reset
  let clearingAlert = false;
  let clearAlertTimeout; // To store the timeout reference

  function resetAlerts() {
    if (!clearingAlert && alertMessage) {
      clearingAlert = true;

      if (clearAlertTimeout) {
        clearTimeout(clearAlertTimeout); // Clear previous timeout if exists
      }

      clearAlertTimeout = setTimeout(() => {
        alertType = null;
        alertMessage = null;
        clearingAlert = false;
      }, 5000); // Delay for 5 seconds before clearing the alert
    }
  }

  // Alert stops when webpage is changed
  afterNavigate(() => resetAlerts())
  
  // Set alert color class based on alert type
  if (alertType === ALERT_TYPES.SUCCESS) {
    alertBackgroundColor = "bg-green-500"; // Green color class for success
  } else if (alertType === ALERT_TYPES.WARNING) {
    alertBackgroundColor = "bg-orange-500"; // Orange color class for warning
  } else if (alertType === ALERT_TYPES.ERROR) {
    alertBackgroundColor = "bg-red-500"; // Red color class for error
  }

</script>

{#if alertMessage}
  <div class="fixed top-[80px] inset-x-0.5 z-10 container shadow-lg max-w-sm mx-auto rounded-box flex justify-center" style="background-color: {alertBackgroundColor}">
    <div class="flex items-center justify-center p-4 space-x-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current text-white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-white">{alertMessage}</span>
    </div>
  </div>
{/if}