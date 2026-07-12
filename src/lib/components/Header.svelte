<script lang="ts">
  import { base } from "$app/paths";

  let searchQuery = $state("");
  let isLoggedIn = $state(false);

  function handleSearch(e: Event) {
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    searchQuery = data.get("search") as string;
  }

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  function goToLogin() {
    window.location.href = `${base}/auth`;
  }
</script>

<header class="header">
  <div class="header-left">
    <button class="theme-btn" onclick={toggleTheme} aria-label="Toggle dark mode">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>
    <a href={base} class="logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
      <span>SongReview</span>
    </a>
  </div>

  <form class="search-bar" onsubmit={handleSearch}>
    <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
    <input type="search" name="search" placeholder="Search songs, artists, albums..." value={searchQuery} />
  </form>

  <div class="header-right">
    {#if isLoggedIn}
      <button class="upload-btn" onclick={() => window.location.href = `${base}/upload`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        Upload
      </button>
      <div class="avatar">U</div>
    {:else}
      <button class="login-btn" onclick={goToLogin}>Sign In</button>
    {/if}
  </div>
</header>

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    background: var(--bg-card);
    border-bottom: 1px solid var(--border);
    gap: 16px;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 1.2rem;
    color: inherit;
    text-decoration: none;
  }

  .logo:hover {
    text-decoration: none;
  }

  .theme-btn {
    background: none;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    color: var(--text-tertiary);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .theme-btn:hover {
    background: var(--bg);
    color: var(--text-secondary);
  }

  .search-bar {
    flex: 1;
    max-width: 480px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-icon {
    position: absolute;
    left: 12px;
    color: var(--text-tertiary);
    pointer-events: none;
  }

  .search-bar input {
    width: 100%;
    padding: 10px 16px 10px 40px;
    border: 1px solid var(--border);
    border-radius: 24px;
    background: var(--bg);
    font-size: 0.9rem;
    outline: none;
    transition: all 0.2s;
    color: var(--text-primary);
  }

  .search-bar input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(106, 13, 173, 0.1);
    background: var(--bg-card);
  }

  .search-bar input::placeholder {
    color: var(--text-tertiary);
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .upload-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .upload-btn:hover {
    background: #5b0b9c;
  }

  .login-btn {
    padding: 8px 20px;
    background: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }

  .login-btn:hover {
    background: var(--primary);
    color: white;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.85rem;
  }
</style>
