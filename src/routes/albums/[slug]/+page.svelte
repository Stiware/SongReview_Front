<script lang="ts">
  import { page } from "$app/stores";
  import SongCard from "$lib/components/SongCard.svelte";
  import { albums, songs } from "$lib/stores/mockData";

  const album = albums.find((a) => a.slug === $page.params.slug);
  const albumSongs = songs.filter((s) => s.albumSlug === $page.params.slug);
</script>

<div class="album-detail">
  {#if album}
    <div class="back-link">
      <a href="/albums">&larr; All Albums</a>
    </div>
    <div class="album-hero">
      <img class="cover" src={album.coverUrl} alt={album.title} />
      <div class="info">
        <h1>{album.title}</h1>
        <a href="/artists/{album.artistSlug}" class="artist-link">{album.artist}</a>
        <div class="meta">
          <span>{album.year}</span>
          <span>&middot;</span>
          <span>{album.genre}</span>
          <span>&middot;</span>
          <span>{album.songCount} songs</span>
        </div>
      </div>
    </div>

    <section class="tracklist">
      <h2>Tracklist</h2>
      <div class="song-list">
        {#each albumSongs as song (song.id)}
          <SongCard {song} />
        {/each}
      </div>
    </section>
  {:else}
    <div class="not-found">
      <h1>Album not found</h1>
      <a href="/albums">Browse albums</a>
    </div>
  {/if}
</div>

<style>
  .album-detail {
    max-width: 800px;
    margin: 0 auto;
  }

  .back-link {
    margin-bottom: 20px;
  }

  .back-link a {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  .back-link a:hover {
    color: var(--primary);
  }

  .album-hero {
    display: flex;
    gap: 28px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    margin-bottom: 32px;
  }

  .cover {
    width: 200px;
    height: 200px;
    border-radius: 14px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .info h1 {
    margin: 0 0 8px;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .artist-link {
    display: block;
    color: var(--primary);
    font-size: 1.1rem;
    margin-bottom: 12px;
  }

  .meta {
    display: flex;
    gap: 8px;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .tracklist h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 16px;
  }

  .song-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .not-found {
    text-align: center;
    padding: 60px 20px;
  }
</style>
