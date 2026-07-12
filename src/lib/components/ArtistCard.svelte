<script lang="ts">
  import { base } from "$app/paths";
  import type { Artist } from "$lib/stores/mockData";

  let { artist }: { artist: Artist } = $props();
</script>

<a href="{base}/artists/{artist.slug}" class="artist-card">
  <img class="image" src={artist.imageUrl} alt={artist.name} loading="lazy" />
  <h3 class="name">{artist.name}</h3>
  <p class="genre">{artist.genre}</p>
  <div class="stats">
    <span>{artist.songCount} songs</span>
    <span>{artist.albumCount} albums</span>
  </div>
</a>

<style>
  .artist-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 14px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  .artist-card:hover {
    text-decoration: none;
    border-color: var(--primary);
    box-shadow: 0 4px 16px rgba(106, 13, 173, 0.1);
    transform: translateY(-2px);
  }

  .image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 12px;
  }

  .name {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .genre {
    margin: 4px 0 0;
    font-size: 0.85rem;
    color: var(--primary);
    font-weight: 500;
  }

  .stats {
    display: flex;
    gap: 12px;
    margin-top: 8px;
    font-size: 0.78rem;
    color: var(--text-tertiary);
  }
</style>
