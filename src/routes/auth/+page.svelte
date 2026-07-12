<script lang="ts">
  let isSignUp = $state(false);
  let email = $state("");
  let password = $state("");
  let name = $state("");
</script>

<div class="auth-page">
  <div class="auth-card">
    <div class="auth-header">
      <svg class="auth-logo" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
      <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
      <p>{isSignUp ? "Join the community and share your reviews" : "Welcome back! Sign in to continue"}</p>
    </div>

    <form onsubmit={(e) => e.preventDefault()}>
      {#if isSignUp}
        <div class="form-group">
          <label for="name">Full Name</label>
          <input id="name" type="text" bind:value={name} placeholder="John Doe" />
        </div>
      {/if}

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" bind:value={email} placeholder="you@example.com" />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" bind:value={password} placeholder="••••••••" />
      </div>

      <button type="submit" class="btn primary">
        {isSignUp ? "Create Account" : "Sign In"}
      </button>
    </form>

    <div class="divider">
      <span>or</span>
    </div>

    <div class="social-buttons">
      <button class="btn social">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continue with Google
      </button>
      <button class="btn social">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.1.82-.26.82-.58 0-.29-.01-1.24-.02-2.25-3.34.72-4.04-1.44-4.04-1.44-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.1-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/></svg>
        Continue with GitHub
      </button>
    </div>

    <p class="toggle">
      {isSignUp ? "Already have an account?" : "Don't have an account?"}
      <button class="link-btn" onclick={() => { isSignUp = !isSignUp; }}>
        {isSignUp ? "Sign In" : "Sign Up"}
      </button>
    </p>
  </div>
</div>

<style>
  .auth-page {
    display: flex;
    justify-content: center;
    padding: 40px 20px;
  }

  .auth-card {
    width: 100%;
    max-width: 420px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 36px;
  }

  .auth-header {
    text-align: center;
    margin-bottom: 28px;
  }

  .auth-logo {
    color: var(--primary);
  }

  .auth-header h1 {
    margin: 12px 0 4px;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .auth-header p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .form-group {
    margin-bottom: 16px;
  }

  label {
    display: block;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 6px;
  }

  input {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid var(--border);
    border-radius: 10px;
    font-size: 0.9rem;
    outline: none;
    background: var(--bg);
    color: var(--text-primary);
    transition: border-color 0.2s;
  }

  input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(106, 13, 173, 0.1);
  }

  .btn.primary {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 12px;
    background: var(--primary);
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn.primary:hover {
    background: #5b0b9c;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 24px 0;
  }

  .divider::before, .divider::after {
    content: "";
    flex: 1;
    border-top: 1px solid var(--border);
  }

  .divider span {
    font-size: 0.85rem;
    color: var(--text-tertiary);
  }

  .social-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .btn.social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 11px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--bg);
    color: var(--text-primary);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn.social:hover {
    background: var(--bg-elevated);
  }

  .toggle {
    text-align: center;
    margin: 20px 0 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .link-btn {
    background: none;
    border: none;
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0;
  }

  .link-btn:hover {
    text-decoration: underline;
  }
</style>
