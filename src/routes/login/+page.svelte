<script>
  import { authenticateUser } from "../../lib/auth.js";
  import {goto} from '$app/navigation'
  // import Alert from "./lib/Alert.svelte"



  // import { createUser } from "../users/new/+page.svelte"

  async function signIn(evt) {
    evt.preventDefault()
    
    const userData = {
      username: evt.target['username'].value,
      password: evt.target['password'].value,
    };

    const res = await authenticateUser(userData.username, userData.password)
    if (res.success) {
      goto('/');
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
      <button class="bg-sky-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline form-control btn">
        Sign In
      </button>
    </div>
  </form>
</div>



<!-- <div class="flex justify-center items-center mt-8 ">
<form on:submit={signIn} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="form-control w-full" >

    <label class="label" for="username">
      <span class="label-text">Username</span>
    </label>
    <input type="text" name="username" placeholder="johndoe" class="input input-bordered w-100" />
    
    <label class="label" for="password">
      <span class="label-text">Password</span>
    </label>
    <input type="text" name="password" class="input input-bordered w-full" />
    
    <div class="form-control w-full mt-4" >
      <button class="btn btn-md">Submit</button>
    </div>

  </div> -->
<!-- 
</form> 
</div> -->
