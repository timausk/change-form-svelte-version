<script>
import router from './router';
</script>

<!-- ToDo add header -->
<main>
  <svelte:component this={router.page} queryParams="{router.queryParams}" />
</main>
<!-- ToDo add footer -->

<style>
</style>
