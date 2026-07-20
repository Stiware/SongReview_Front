<script lang="ts">
  import "../app.css";
  import Header from "../lib/components/Header.svelte";
  import NavigationTabs from "../lib/components/NavigationTabs.svelte";

  let { children } = $props();

  let systemDark = $state(false);

  $effect(() => {
    const stored = (function() {
      try { return localStorage.getItem("theme"); } catch {}
    })();

    if (!stored) {
      const mq = matchMedia("(prefers-color-scheme: dark)");
      systemDark = mq.matches;
      document.documentElement.classList.toggle("dark", mq.matches);

      const onChange = (e: MediaQueryListEvent) => {
        const storedNow = (function() {
          try { return localStorage.getItem("theme"); } catch {}
        })();
        if (!storedNow) {
          systemDark = e.matches;
          document.documentElement.classList.toggle("dark", e.matches);
        }
      };
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
  });
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
