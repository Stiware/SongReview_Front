<script lang="ts">
  import { page } from "$app/stores";
  import { songs, getRelativeTime } from "$lib/stores/mockData";

  const song = songs.find((s) => s.id === Number($page.params.id));
</script>

<div class="song-detail">
  {#if song}
    <div class="back-link">
      <a href="/">&larr; Back to Home</a>
    </div>
    <div class="detail-card">
      <img class="cover" src={song.coverUrl} alt={song.title} />
      <div class="info">
        <div class="genre-badge">{song.genre}</div>
        <h1>{song.title}</h1>
        <a href="/artists/{song.artistSlug}" class="artist-link">{song.artist}</a>
        <a href="/albums/{song.albumSlug}" class="album-link">{song.album}</a>
        <div class="meta-row">
          <span class="duration">{song.duration}</span>
          <span class="sep">&middot;</span>
          <span class="rating">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            {song.rating}
          </span>
          <span class="sep">&middot;</span>
          <span>{song.reviewCount} reviews</span>
          <span class="sep">&middot;</span>
          <span>{getRelativeTime(song.createdAt)}</span>
        </div>
        <div class="actions">
          <button class="btn primary">Write a Review</button>
          <button class="btn secondary">Add to Favorites</button>
        </div>
      </div>
    </div>

    <section class="reviews-section">
      <h2>Reviews</h2>
      <div class="review-list">
        <div class="review">
          <div class="review-header">
            <div class="review-avatar">J</div>
            <div>
              <strong>John Doe</strong>
              <span class="review-date">2 days ago</span>
            </div>
            <div class="review-rating">★★★★★</div>
          </div>
          <p>Amazing track! The production quality is outstanding and the lyrics really resonate.</p>
        </div>
        <div class="review">
          <div class="review-header">
            <div class="review-avatar">S</div>
            <div>
              <strong>Sarah Smith</strong>
              <span class="review-date">5 days ago</span>
            </div>
            <div class="review-rating">★★★★☆</div>
          </div>
          <p>Great song, but I prefer the live version. Still a classic though!</p>
        </div>
      </div>
    </section>
  {:else}
    <div class="not-found">
      <h1>Song not found</h1>
      <a href="/">Go back home</a>
    </div>
  {/if}
</div>

<style>
  .song-detail {
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

  .detail-card {
    display: flex;
    gap: 32px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
  }

  .cover {
    width: 220px;
    height: 220px;
    border-radius: 14px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .info {
    flex: 1;
  }

  .genre-badge {
    display: inline-block;
    padding: 4px 12px;
    background: var(--accent-bg);
    color: var(--primary-light);
    border-radius: 20px;
    font-size: 0.78rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .info h1 {
    margin: 0 0 8px;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .artist-link, .album-link {
    display: block;
    color: var(--primary);
    font-size: 1rem;
    margin: 2px 0;
  }

  .meta-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    font-size: 0.9rem;
    color: var(--text-secondary);
    flex-wrap: wrap;
  }

  .sep {
    color: var(--border);
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #f59e0b;
    font-weight: 600;
  }

  .actions {
    display: flex;
    gap: 12px;
    margin-top: 24px;
  }

  .btn {
    padding: 10px 24px;
    border-radius: 24px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
  }

  .btn.primary {
    background: var(--primary);
    color: white;
  }

  .btn.primary:hover {
    background: #5b0b9c;
  }

  .btn.secondary {
    background: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
  }

  .btn.secondary:hover {
    background: var(--primary);
    color: white;
  }

  .reviews-section {
    margin-top: 32px;
  }

  .reviews-section h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 16px;
  }

  .review-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .review {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px;
  }

  .review-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .review-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.85rem;
    flex-shrink: 0;
  }

  .review-header strong {
    font-size: 0.9rem;
    color: var(--text-primary);
  }

  .review-date {
    display: block;
    font-size: 0.78rem;
    color: var(--text-tertiary);
  }

  .review-rating {
    margin-left: auto;
    color: #f59e0b;
  }

  .review p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .not-found {
    text-align: center;
    padding: 60px 20px;
  }

  .not-found h1 {
    color: var(--text-primary);
  }
</style>
