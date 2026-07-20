<script lang="ts">
  import SongCard from "$lib/components/SongCard.svelte";
  import { songs } from "$lib/stores/mockData";
</script>

<div class="home">
  <section class="hero">
    <h1>Discover & Review Music</h1>
    <p>Share your thoughts on the latest tracks and discover what others are saying.</p>
  </section>

  <section class="recent-reviews">
    <div class="section-header">
      <h2>Recent Reviews</h2>
      <span class="count">{songs.length} songs</span>
    </div>
    <div class="song-list">
      {#each songs as song (song.id)}
        <SongCard {song} />
      {/each}
    </div>
  </section>
</div>

<style>
  .home {
    max-width: 800px;
    margin: 0 auto;
  }

  .hero {
    text-align: center;
    padding: 40px 20px 32px;
  }

  .hero h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .hero p {
    margin: 12px 0 0;
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .section-header h2 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .count {
    font-size: 0.85rem;
    color: var(--text-tertiary);
  }

  .song-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 480px) {
    .hero {
      padding: 20px 12px 24px;
    }
    .hero h1 {
      font-size: 1.5rem;
    }
    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding: 28px 16px 24px;
    }
    .section-header h2 {
      font-size: 1.1rem;
    }
  }
</style>
