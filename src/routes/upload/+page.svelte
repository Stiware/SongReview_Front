<script lang="ts">
  let title = $state("");
  let artist = $state("");
  let album = $state("");
  let genre = $state("Pop");
  let coverFile = $state<File | null>(null);
  let audioFile = $state<File | null>(null);
  let submitted = $state(false);

  const genres = ["Pop", "Rock", "Hip Hop", "R&B", "Electronic", "Jazz", "Classical", "Folk", "Country", "Metal", "Funk", "Grunge"];

  function handleSubmit(e: Event) {
    e.preventDefault();
    submitted = true;
  }
</script>

<div class="upload-page">
  <div class="page-header">
    <h1>Upload a Song</h1>
    <p>Share your music with the community</p>
  </div>

  {#if submitted}
    <div class="success-card">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <h2>Song Submitted!</h2>
      <p>Your song "{title}" is pending review. It will appear on the site once approved.</p>
      <button class="btn primary" onclick={() => { submitted = false; title = ""; artist = ""; album = ""; genre = "Pop"; coverFile = null; audioFile = null; }}>
        Upload Another
      </button>
    </div>
  {:else}
    <form class="upload-form" onsubmit={handleSubmit}>
      <div class="form-grid">
        <div class="form-group">
          <label for="title">Song Title *</label>
          <input id="title" type="text" bind:value={title} required placeholder="Enter song title" />
        </div>

        <div class="form-group">
          <label for="artist">Artist Name *</label>
          <input id="artist" type="text" bind:value={artist} required placeholder="Enter artist name" />
        </div>

        <div class="form-group">
          <label for="album">Album Name</label>
          <input id="album" type="text" bind:value={album} placeholder="Enter album name (optional)" />
        </div>

        <div class="form-group">
          <label for="genre">Genre *</label>
          <select id="genre" bind:value={genre} required>
            {#each genres as g}
              <option value={g}>{g}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="cover">Cover Artwork</label>
        <div class="file-drop" class:has-file={coverFile !== null}>
          {#if coverFile}
            <div class="file-info">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span>{coverFile.name}</span>
            </div>
          {:else}
            <svg class="drop-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <p>Drop an image here or click to browse</p>
          {/if}
          <input id="cover" type="file" accept="image/*" onchange={(e) => { const target = e.currentTarget as HTMLInputElement; coverFile = target.files?.[0] || null; }} />
        </div>
      </div>

      <div class="form-group">
        <label for="audio">Audio File *</label>
        <div class="file-drop" class:has-file={audioFile !== null}>
          {#if audioFile}
            <div class="file-info">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              <span>{audioFile.name}</span>
            </div>
          {:else}
            <svg class="drop-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <p>Drop an audio file here or click to browse</p>
          {/if}
          <input id="audio" type="file" accept="audio/*" required onchange={(e) => { const target = e.currentTarget as HTMLInputElement; audioFile = target.files?.[0] || null; }} />
        </div>
      </div>

      <button type="submit" class="submit-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        Upload Song
      </button>
    </form>
  {/if}
</div>

<style>
  .upload-page {
    max-width: 640px;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 28px;
  }

  .page-header h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .page-header p {
    margin: 4px 0 0;
    color: var(--text-secondary);
  }

  .upload-form {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-grid .form-group {
    margin-bottom: 0;
  }

  label {
    display: block;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 6px;
  }

  input[type="text"], select {
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

  input[type="text"]:focus, select:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(106, 13, 173, 0.1);
  }

  .file-drop {
    border: 2px dashed var(--border);
    border-radius: 12px;
    padding: 32px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
  }

  .file-drop:hover {
    border-color: var(--primary);
    background: var(--accent-bg);
  }

  .file-drop.has-file {
    border-color: #10b981;
    background: rgba(16, 185, 129, 0.05);
  }

  .file-drop p {
    margin: 8px 0 0;
    font-size: 0.85rem;
    color: var(--text-tertiary);
  }

  .drop-icon {
    color: var(--text-tertiary);
  }

  .file-drop input {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
  }

  .file-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.9rem;
    color: var(--text-primary);
  }

  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 14px;
    margin-top: 8px;
    border: none;
    border-radius: 12px;
    background: var(--primary);
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .submit-btn:hover {
    background: #5b0b9c;
  }

  .success-card {
    text-align: center;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 48px 28px;
  }

  .success-card h2 {
    margin: 16px 0 8px;
    font-size: 1.5rem;
    color: var(--text-primary);
  }

  .success-card p {
    color: var(--text-secondary);
    max-width: 400px;
    margin: 0 auto 24px;
  }

  .btn.primary {
    padding: 10px 24px;
    border-radius: 24px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    background: var(--primary);
    color: white;
    transition: background 0.2s;
  }

  .btn.primary:hover {
    background: #5b0b9c;
  }

  @media (max-width: 600px) {
    .form-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
