<script>
  import { authenticateUser } from "../../lib/auth.js";
  import {goto} from '$app/navigation'
  import { alerts } from "../../lib/alert.js";
  import  { statusSpinner } from "../../lib/spinner.js";
	import Spinner from "../../lib/Spinner.svelte";

  async function signIn(evt) {
    evt.preventDefault()
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    const userData = {
      username: evt.target['username'].value,
      password: evt.target['password'].value,
    };

    const res = await authenticateUser(userData.username, userData.password)
    if (res.success) {
       statusSpinner.set(true)
      alerts.setAlert("Login successful", "success" )
      goto('/')
      ;
    } else {
      alerts.setAlert( "Incorrect Username or Password, please try again", "warning")
    }

  }
  
</script>

<div class="flex justify-center items-center mt-20">

  <form on:submit={signIn} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div class="mb-4 form-control">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="johndoe">
    </div>

    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********">
    </div>

    <div class="flex items-center justify-between">
      <button class="bg-sky-700 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline form-control btn"><Spinner/>
        Sign In
      </button>
    </div>
  </form>
</div>



