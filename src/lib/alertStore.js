import { writable } from "svelte/store";

// Define alert types and their corresponding colors
const ALERT_TYPES = {
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error"
  };

function initializeAlertStore() {
  const defaultValue = { message: null, type: null };
  const { subscribe, set } = writable(defaultValue);

  let timeout;

  return {
    subscribe,
    setAlert: (message, type) => {
      clearTimeout(timeout); // Clear previous timeout, if any

       // Set default type to warning if not provided
       if (!ALERT_TYPES[type]) {
        type = ALERT_TYPES.WARNING;
      }

      set({ message, type });

      // Automatically hide the alert after a certain time (e.g., 5 seconds)
      timeout = setTimeout(() => {
        set(defaultValue);
      }, 5000); // Hide the alert after 5 seconds
    },
  };
}

export const alerts = initializeAlertStore();
export { ALERT_TYPES };