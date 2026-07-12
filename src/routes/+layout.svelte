<script lang="ts">
  import "../app.css";
  import Header from "../lib/components/Header.svelte";
  import NavigationTabs from "../lib/components/NavigationTabs.svelte";

  let { children } = $props();
</script>

<div class="app-container">
  <Header />
  <NavigationTabs />
  <main class="content-area">
    {@render children()}
  </main>
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content-area {
    flex-grow: 1;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    background: var(--bg);
  }
</style>
