<!-- File creates navbar for website -->

<script>
	import { LoggedIn } from "./auth";
  import { logOut } from "./auth";
  
</script> 

<nav class="fixed border-solid outline-cyan-500">
  
  <div>
    <button class="fixed text-3xl w-50 btn btn-secondary btn-lg">
      <a href="/">NEXT Jobs DB</a>
    </button>
  </div>

  <div>
    {#if $LoggedIn == true}
      <div>

        <button class="fixed top-10 w-50 btn right-40">
          <a href="/postAJob">Create New Job Post</a>
        </button>

        <button class="fixed top-10 right-10 w-50 btn" on:click={logOut}>Log Out</button>

    </div>

    {:else}
      <div>
         <button class="fixed top-10 w-50 btn right-40">
          <a href="/users/new">Register</a>
        </button>

        <button class="fixed top-10 right-10 w-50 btn">
          <a href=/login>Log In</a>
        </button>
      </div>
    {/if }

  </div>
</nav>

