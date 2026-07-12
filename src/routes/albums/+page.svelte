<script lang="ts">
  import AlbumCard from "$lib/components/AlbumCard.svelte";
  import { albums } from "$lib/stores/mockData";
</script>

<div class="albums-page">
  <div class="page-header">
    <h1>Albums</h1>
    <p>Browse {albums.length} albums</p>
  </div>
  <div class="album-grid">
    {#each albums as album (album.id)}
      <AlbumCard {album} />
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

  .album-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
  }
</style>
