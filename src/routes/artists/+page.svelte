<script lang="ts">
  import ArtistCard from "$lib/components/ArtistCard.svelte";
  import { artists } from "$lib/stores/mockData";
</script>

<div class="artists-page">
  <div class="page-header">
    <h1>Artists</h1>
    <p>Browse {artists.length} artists</p>
  </div>
  <div class="artist-grid">
    {#each artists as artist (artist.id)}
      <ArtistCard {artist} />
    {/each}
  </div>
</div>

<style>
  .page-header {
    margin-bottom: 24px;
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

  .artist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
</style>
