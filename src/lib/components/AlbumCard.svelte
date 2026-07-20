<script lang="ts">
  import { base } from "$app/paths";
  import type { Album } from "$lib/stores/mockData";

  let { album }: { album: Album } = $props();
</script>

<a href="{base}/albums/{album.slug}" class="album-card">
  <img class="cover" src={album.coverUrl} alt={album.title} loading="lazy" />
  <h3 class="title">{album.title}</h3>
  <p class="artist">{album.artist}</p>
  <div class="meta">
    <span>{album.year}</span>
    <span>{album.songCount} songs</span>
  </div>
</a>

<style>
  .album-card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 14px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  .album-card:hover {
    text-decoration: none;
    border-color: var(--primary);
    box-shadow: 0 4px 16px rgba(106, 13, 173, 0.1);
    transform: translateY(-2px);
  }

  .cover {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 12px;
  }

  .title {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .artist {
    margin: 4px 0 0;
    font-size: 0.83rem;
    color: var(--text-secondary);
  }

  .meta {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 0.78rem;
    color: var(--text-tertiary);
  }

  @media (max-width: 480px) {
    .album-card {
      padding: 10px;
    }
    .title {
      font-size: 0.85rem;
    }
    .cover {
      border-radius: 8px;
    }
  }

  @media (max-width: 640px) {
    .meta {
      gap: 6px;
      flex-wrap: wrap;
    }
  }
</style>
