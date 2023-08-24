<!-- File creates navbar for website -->

<script>
	import { LoggedIn } from "./auth";
  import { logOut } from "./auth";
  import Theme from "./Theme.svelte";
  
</script> 

<nav class= "h-16 flex items-center shadow-md fixed top-0 w-full z-50">

  <a href="/" class=" text-3xl rounded-full px-4 py-2 font-semibold btn-accent">
    NEXT Jobs DB
  </a>
  
  <div class="flex-1"></div>

  <div class="flex items-center space-x-4">

    <div class="flex space-x-4 items-center">
      {#if $LoggedIn == true}
        <a href="/jobs/new" class="text-white border border-white px-4 py-2 rounded-full text-sm btn">
          Create New Job Post
        </a>
        <button on:click={logOut} class="text-white border border-white px-4 py-2 rounded-full text-sm btn">
          Log Out
        </button>
        <Theme/>
      {:else}
        <a href="users/new" class="text-white border border-white px-4 py-2 rounded-full text-sm btn">
          Register
        </a>
        <a href="/login" class="text-white border border-white px-4 py-2 rounded-full text-sm btn">
          Log In
        </a>
        <Theme/>
      {/if}
    </div>
   
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>


<!-- <nav class="bg-gray-800 h-16 flex items-center">
  <a href="#" class="text-white px-4">Home</a>
  <div class="flex-1"></div>
  <div class="flex items-center space-x-4">
    <a href="#" class="text-white border border-white px-4 py-2 rounded">About</a>
    <a href="#" class="text-white border border-white px-4 py-2 rounded">Services</a>
    <a href="#" class="text-white border border-white px-4 py-2 rounded">Portfolio</a>
    <a href="#" class="text-white border border-white px-4 py-2 rounded">Contact</a>
  </div>
</nav> -->