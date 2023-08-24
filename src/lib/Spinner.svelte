<script>
    import { onMount } from 'svelte';
    import { statusSpinner } from './spinner';
  
    let isLoading = false; // Bind the store value directly
  
    // Simulate an asynchronous action
    onMount(async () => {
      statusSpinner.set(true); // Start the spinner
  
      // Simulate an asynchronous action, e.g., fetching data
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a 2-second delay
  
      statusSpinner.set(false); // Stop the spinner
    });
  </script>

<div class="loading loading-spinner loading-xs" class:active={isLoading}></div>

