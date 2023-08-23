<!-- Contains the stuff that appears on all webpages -->

<script>
    import "../app.css";
    import Navbar from "../lib/Navbar.svelte";
    import Alert from "../lib/Alert.svelte";
</script>

 <Navbar/>
 <Alert/>

  <slot />

 