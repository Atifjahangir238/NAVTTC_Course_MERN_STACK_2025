import React, { useState } from 'react';
import songsData from '../data/Song';

function Playlist() {
  const [songs, setSongs] = useState(songsData);
  const [playingId, setPlayingId] = useState(null);

  const togglePlay = (id) => {
    setPlayingId(prev => (prev === id ? null : id));
  };

  const toggleLike = (id) => {
    setSongs(songs.map(song =>
      song.id === id ? { ...song, liked: !song.liked } : song
    ));
  };

  const removeSong = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">🎵 My Playlist</h2>
      {songs.length === 0 ? <p>No songs in playlist.</p> : (
        <ul>
          {songs.map(song => (
            <li key={song.id} className="flex justify-between items-center mb-3 p-2 border rounded">
              <div>
                <p className="font-semibold">{song.title}</p>
                <p className="text-sm text-gray-600">{song.artist}</p>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => togglePlay(song.id)}
                  className="text-blue-500"
                >
                  {playingId === song.id ? '⏸️ Pause' : '▶️ Play'}
                </button>
                <button
                  onClick={() => toggleLike(song.id)}
                  className={song.liked ? 'text-red-500' : 'text-gray-500'}
                >
                  {song.liked ? '❤️' : '🤍'}
                </button>
                <button
                  onClick={() => removeSong(song.id)}
                  className="text-sm text-white bg-red-500 px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Playlist;
