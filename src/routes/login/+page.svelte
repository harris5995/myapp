<script>
  import { authenticateUser } from "../../lib/auth.js";
  import { goto } from '$app/navigation';
  import { alerts, ALERT_TYPES } from "../../lib/alertStore.js";
  import { statusSpinner } from "../../lib/spinner.js";
  import Spinner from "../../lib/Spinner.svelte";

  let successAlertVisible = false;
  let loading = false;

  async function signIn(evt) {
    evt.preventDefault();

    loading = true; // Set loading to true

    await new Promise(resolve => setTimeout(resolve, 2000));

    const userData = {
      username: evt.target['username'].value,
      password: evt.target['password'].value,
    };

    try {
      const res = await authenticateUser(userData.username, userData.password);
      if (res.success) {
        statusSpinner.set(true);
        alerts.setAlert("Login successful", ALERT_TYPES.SUCCESS);
        successAlertVisible = true;
        goto('/');

        setTimeout(() => {
          successAlertVisible = false;
          statusSpinner.set(false); // Stop the spinner
        }, 5000); // Hide the success alert after 5 seconds
      } else {
        alerts.setAlert("Incorrect Username or Password, please try again", "warning");
      }
    } finally {
      loading = false; // Reset loading state
    }
  }
</script>

{#if successAlertVisible}
  <div class="alert alert-success">
    Login successful!
  </div>
{/if}

<div class="flex justify-center items-center mt-20">
  <form on:submit={signIn} class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-semibold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="johndoe">
    </div>

    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-semibold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none rounded-lg w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********">
    </div>

    <div class="flex items-center justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-10 rounded-lg focus:outline-none focus:shadow-outline"
        disabled={loading}
      >
        {#if loading}
          <Spinner class="animate-spin h-5 w-5 mr-2" /> <!-- Show spinner if loading -->
        {/if}
        Sign In
      </button>
    </div>
  </form>
</div>