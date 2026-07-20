export interface Song {
  id: number;
  title: string;
  artist: string;
  artistSlug: string;
  album: string;
  albumSlug: string;
  coverUrl: string;
  duration: string;
  rating: number;
  reviewCount: number;
  createdAt: Date;
  genre: string;
}

export interface Artist {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  genre: string;
  songCount: number;
  albumCount: number;
  bio: string;
}

export interface Album {
  id: number;
  title: string;
  slug: string;
  artist: string;
  artistSlug: string;
  coverUrl: string;
  year: number;
  songCount: number;
  genre: string;
}

function hoursAgo(h: number): Date {
  const d = new Date();
  d.setHours(d.getHours() - h);
  return d;
}

function daysAgo(d: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - d);
  return date;
}

export const songs: Song[] = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", artistSlug: "the-weeknd", album: "After Hours", albumSlug: "after-hours", coverUrl: "https://picsum.photos/seed/42/400/400", duration: "3:20", rating: 4.8, reviewCount: 1243, createdAt: hoursAgo(2), genre: "Pop" },
  { id: 2, title: "Bohemian Rhapsody", artist: "Queen", artistSlug: "queen", album: "A Night at the Opera", albumSlug: "a-night-at-the-opera", coverUrl: "https://picsum.photos/seed/73/400/400", duration: "5:55", rating: 4.9, reviewCount: 2891, createdAt: hoursAgo(5), genre: "Rock" },
  { id: 3, title: "Stairway to Heaven", artist: "Led Zeppelin", artistSlug: "led-zeppelin", album: "Led Zeppelin IV", albumSlug: "led-zeppelin-iv", coverUrl: "https://picsum.photos/seed/156/400/400", duration: "8:02", rating: 4.9, reviewCount: 2156, createdAt: hoursAgo(8), genre: "Rock" },
  { id: 4, title: "Hotel California", artist: "Eagles", artistSlug: "eagles", album: "Hotel California", albumSlug: "hotel-california", coverUrl: "https://picsum.photos/seed/234/400/400", duration: "6:30", rating: 4.7, reviewCount: 1876, createdAt: hoursAgo(12), genre: "Rock" },
  { id: 5, title: "Lose Yourself", artist: "Eminem", artistSlug: "eminem", album: "8 Mile Soundtrack", albumSlug: "8-mile-soundtrack", coverUrl: "https://picsum.photos/seed/317/400/400", duration: "5:26", rating: 4.8, reviewCount: 1654, createdAt: hoursAgo(18), genre: "Hip Hop" },
  { id: 6, title: "Smells Like Teen Spirit", artist: "Nirvana", artistSlug: "nirvana", album: "Nevermind", albumSlug: "nevermind", coverUrl: "https://picsum.photos/seed/418/400/400", duration: "5:01", rating: 4.8, reviewCount: 2101, createdAt: daysAgo(1), genre: "Grunge" },
  { id: 7, title: "Imagine", artist: "John Lennon", artistSlug: "john-lennon", album: "Imagine", albumSlug: "imagine", coverUrl: "https://picsum.photos/seed/523/400/400", duration: "3:04", rating: 4.9, reviewCount: 2345, createdAt: daysAgo(1), genre: "Rock" },
  { id: 8, title: "Billie Jean", artist: "Michael Jackson", artistSlug: "michael-jackson", album: "Thriller", albumSlug: "thriller", coverUrl: "https://picsum.photos/seed/617/400/400", duration: "4:54", rating: 4.8, reviewCount: 1987, createdAt: daysAgo(2), genre: "Pop" },
  { id: 9, title: "Yesterday", artist: "The Beatles", artistSlug: "the-beatles", album: "Help!", albumSlug: "help", coverUrl: "https://picsum.photos/seed/724/400/400", duration: "2:05", rating: 4.9, reviewCount: 2678, createdAt: daysAgo(2), genre: "Rock" },
  { id: 10, title: "Rolling in the Deep", artist: "Adele", artistSlug: "adele", album: "21", albumSlug: "21", coverUrl: "https://picsum.photos/seed/812/400/400", duration: "3:48", rating: 4.7, reviewCount: 1543, createdAt: daysAgo(3), genre: "Pop" },
  { id: 11, title: "Paint It Black", artist: "The Rolling Stones", artistSlug: "the-rolling-stones", album: "Aftermath", albumSlug: "aftermath", coverUrl: "https://picsum.photos/seed/891/400/400", duration: "3:22", rating: 4.7, reviewCount: 1432, createdAt: daysAgo(3), genre: "Rock" },
  { id: 12, title: "Purple Rain", artist: "Prince", artistSlug: "prince", album: "Purple Rain", albumSlug: "purple-rain", coverUrl: "https://picsum.photos/seed/945/400/400", duration: "8:40", rating: 4.8, reviewCount: 1765, createdAt: daysAgo(4), genre: "Funk" },
];

export const artists: Artist[] = [
  { id: 1, name: "The Weeknd", slug: "the-weeknd", imageUrl: "https://picsum.photos/seed/128/400/400", genre: "Pop", songCount: 85, albumCount: 5, bio: "Canadian singer-songwriter known for his eclectic musical style." },
  { id: 2, name: "Queen", slug: "queen", imageUrl: "https://picsum.photos/seed/267/400/400", genre: "Rock", songCount: 180, albumCount: 15, bio: "British rock band formed in 1970, one of the best-selling music artists." },
  { id: 3, name: "Led Zeppelin", slug: "led-zeppelin", imageUrl: "https://picsum.photos/seed/389/400/400", genre: "Rock", songCount: 92, albumCount: 9, bio: "English rock band formed in 1968, pioneers of hard rock and heavy metal." },
  { id: 4, name: "Eagles", slug: "eagles", imageUrl: "https://picsum.photos/seed/456/400/400", genre: "Rock", songCount: 65, albumCount: 7, bio: "American rock band formed in 1971, known for their harmonies and country-rock sound." },
  { id: 5, name: "Eminem", slug: "eminem", imageUrl: "https://picsum.photos/seed/534/400/400", genre: "Hip Hop", songCount: 210, albumCount: 11, bio: "American rapper considered one of the greatest of all time." },
  { id: 6, name: "Nirvana", slug: "nirvana", imageUrl: "https://picsum.photos/seed/678/400/400", genre: "Grunge", songCount: 52, albumCount: 3, bio: "American rock band formed in 1987, credited with bringing grunge to the mainstream." },
  { id: 7, name: "Michael Jackson", slug: "michael-jackson", imageUrl: "https://picsum.photos/seed/789/400/400", genre: "Pop", songCount: 120, albumCount: 10, bio: "American singer known as the King of Pop, one of the best-selling artists ever." },
  { id: 8, name: "Adele", slug: "adele", imageUrl: "https://picsum.photos/seed/876/400/400", genre: "Pop", songCount: 35, albumCount: 4, bio: "English singer-songwriter known for her powerful voice and emotional ballads." },
];

export const albums: Album[] = [
  { id: 1, title: "After Hours", slug: "after-hours", artist: "The Weeknd", artistSlug: "the-weeknd", coverUrl: "https://picsum.photos/seed/55/400/400", year: 2020, songCount: 14, genre: "Pop" },
  { id: 2, title: "A Night at the Opera", slug: "a-night-at-the-opera", artist: "Queen", artistSlug: "queen", coverUrl: "https://picsum.photos/seed/189/400/400", year: 1975, songCount: 12, genre: "Rock" },
  { id: 3, title: "Led Zeppelin IV", slug: "led-zeppelin-iv", artist: "Led Zeppelin", artistSlug: "led-zeppelin", coverUrl: "https://picsum.photos/seed/298/400/400", year: 1971, songCount: 8, genre: "Rock" },
  { id: 4, title: "Hotel California", slug: "hotel-california", artist: "Eagles", artistSlug: "eagles", coverUrl: "https://picsum.photos/seed/367/400/400", year: 1976, songCount: 9, genre: "Rock" },
  { id: 5, title: "Nevermind", slug: "nevermind", artist: "Nirvana", artistSlug: "nirvana", coverUrl: "https://picsum.photos/seed/478/400/400", year: 1991, songCount: 12, genre: "Grunge" },
  { id: 6, title: "Thriller", slug: "thriller", artist: "Michael Jackson", artistSlug: "michael-jackson", coverUrl: "https://picsum.photos/seed/567/400/400", year: 1982, songCount: 9, genre: "Pop" },
  { id: 7, title: "21", slug: "21", artist: "Adele", artistSlug: "adele", coverUrl: "https://picsum.photos/seed/723/400/400", year: 2011, songCount: 11, genre: "Pop" },
  { id: 8, title: "Purple Rain", slug: "purple-rain", artist: "Prince", artistSlug: "prince", coverUrl: "https://picsum.photos/seed/834/400/400", year: 1984, songCount: 9, genre: "Funk" },
];

export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
}
