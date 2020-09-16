<script>
import router from './router';
import Header from './components/header/Header.svelte'
import Footer from './components/footer/Footer.svelte'
</script>

<Header/>
<main class="main container">
  <svelte:component this={router.page} queryParams="{router.queryParams}" />
</main>
<Footer/>

<style global lang="scss">
  @import "styles/global.scss";
</style>
