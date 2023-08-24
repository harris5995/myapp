<!-- Contains the stuff that appears on all webpages -->

<script>
  import "../app.css";
  import Navbar from "../lib/Navbar.svelte";
  import Alert from "../lib/Alert.svelte";
</script>

<style>
  main {
    padding-top: 4rem; /* Increase this value as needed */
  }

   /* Add margin-top to Alert to move it down */
   .alert-container {
    margin-top: 2rem; /* Adjust this value to move the Alert down */
  }

</style>

<Navbar/>

<div class="alert-container">
  <Alert/>
</div>


<main>
<slot />
</main>