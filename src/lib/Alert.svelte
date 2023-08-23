<script>
    import { alerts } from "../lib/alert.js";
    import { afterNavigate } from "$app/navigation"
  
    let alertType = null
    let alertMessage = null
  
    // setting our local alertType and alertMessage whenever alerts.set Alert is called
    $: if ($alerts.type && $alerts.message) {
        alertType = $alerts.type
        alertMessage = $alerts.message
    }
  
    // reset
    function resetAlerts() {
      if ($alerts.message && $alerts.type) {
        alerts.clearAlert()
      } else {
        alertType = $alerts.type
        alertMessage = $alerts.message
      }
    }
  
    //Alert stops when webpage is changed
    afterNavigate(() => resetAlerts())
  
  </script>
  
  
  {#if alertMessage}
    <div class="fixed top-[110px] inset-x-0.5 z-10 container alert alert-{alertType} shadow-lg max-w-sm mx-auto rounded-box flex justify-center animate-pulse">
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="container stroke-current flex-shrink-0 w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>{alertMessage}</span>
      </div>
    </div>
  {/if}
