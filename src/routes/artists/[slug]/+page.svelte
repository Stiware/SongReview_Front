<script lang="ts">
  import { page } from "$app/stores";
  import SongCard from "$lib/components/SongCard.svelte";
  import { artists, songs } from "$lib/stores/mockData";

  const artist = artists.find((a) => a.slug === $page.params.slug);
  const artistSongs = songs.filter((s) => s.artistSlug === $page.params.slug);
</script>

<div class="artist-detail">
  {#if artist}
    <div class="back-link">
      <a href="/artists">&larr; All Artists</a>
    </div>
    <div class="artist-hero">
      <img class="image" src={artist.imageUrl} alt={artist.name} />
      <div class="info">
        <h1>{artist.name}</h1>
        <span class="genre">{artist.genre}</span>
        <div class="stats">
          <span>{artist.songCount} songs</span>
          <span>&middot;</span>
          <span>{artist.albumCount} albums</span>
        </div>
        <p class="bio">{artist.bio}</p>
      </div>
    </div>

    <section class="songs-section">
      <h2>Top Songs</h2>
      <div class="song-list">
        {#each artistSongs as song (song.id)}
          <SongCard {song} />
        {/each}
      </div>
    </section>
  {:else}
    <div class="not-found">
      <h1>Artist not found</h1>
      <a href="/artists">Browse artists</a>
    </div>
  {/if}
</div>

<style>
  .artist-detail {
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

  .artist-hero {
    display: flex;
    gap: 28px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    margin-bottom: 32px;
  }

  .image {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  .info h1 {
    margin: 0 0 6px;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .genre {
    display: inline-block;
    padding: 4px 14px;
    background: var(--accent-bg);
    color: var(--primary-light);
    border-radius: 20px;
    font-size: 0.83rem;
    font-weight: 500;
  }

  .stats {
    display: flex;
    gap: 8px;
    margin: 10px 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .bio {
    margin: 8px 0 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .songs-section h2 {
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
