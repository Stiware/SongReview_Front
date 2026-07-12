<script lang="ts">
  import { base } from "$app/paths";
  import type { Song } from "$lib/stores/mockData";
  import { getRelativeTime } from "$lib/stores/mockData";

  let { song }: { song: Song } = $props();
</script>

<a href="{base}/songs/{song.id}" class="song-card">
  <img class="cover" src={song.coverUrl} alt={song.title} loading="lazy" />
  <div class="info">
    <h3 class="title">{song.title}</h3>
    <p class="artist">{song.artist}</p>
    <p class="album">{song.album}</p>
  </div>
  <div class="meta">
    <span class="rating">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
      {song.rating}
    </span>
    <span class="time">{getRelativeTime(song.createdAt)}</span>
  </div>
</a>

<style>
  .song-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 16px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  .song-card:hover {
    text-decoration: none;
    border-color: var(--primary);
    box-shadow: 0 4px 12px rgba(106, 13, 173, 0.1);
    transform: translateY(-1px);
  }

  .cover {
    width: 56px;
    height: 56px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .info {
    flex: 1;
    min-width: 0;
  }

  .title {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .artist {
    margin: 2px 0 0;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .album {
    margin: 1px 0 0;
    font-size: 0.8rem;
    color: var(--text-tertiary);
  }

  .meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    flex-shrink: 0;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #f59e0b;
  }

  .time {
    font-size: 0.78rem;
    color: var(--text-tertiary);
  }
</style>
