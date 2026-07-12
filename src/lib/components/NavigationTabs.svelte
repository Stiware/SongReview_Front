<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  const tabs = [
    { label: "Home", href: base, icon: "home" },
    { label: "Artists", href: `${base}/artists`, icon: "users" },
    { label: "Albums", href: `${base}/albums`, icon: "disc" },
  ];
</script>

<nav class="nav-tabs">
  <div class="nav-inner">
    {#each tabs as tab}
      <a
        href={tab.href}
        class="tab"
        class:active={$page.url.pathname === tab.href}
      >
        {#if tab.icon === "home"}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        {:else if tab.icon === "users"}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        {:else if tab.icon === "disc"}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        {/if}
        {tab.label}
      </a>
    {/each}
  </div>
</nav>

<style>
  .nav-tabs {
    border-bottom: 1px solid var(--border);
    background: var(--bg-card);
    position: sticky;
    top: 61px;
    z-index: 99;
  }

  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 4px;
    padding: 0 24px;
  }

  .tab {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 20px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
  }

  .tab:hover {
    color: var(--text-primary);
    text-decoration: none;
    background: var(--bg);
  }

  .tab.active {
    color: var(--primary);
    border-bottom-color: var(--primary);
  }
</style>
