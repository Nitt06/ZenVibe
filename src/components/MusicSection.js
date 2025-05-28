import React from 'react';

function MusicSection({ mood }) {
  const moodPlaylists = {
    happy: 'https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC',
    sad: 'https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1',
    excited: 'https://open.spotify.com/playlist/37i9dQZF1DX1g0iEXLFycr',
    motivated: 'https://open.spotify.com/playlist/37i9dQZF1DX8FwnYE6PRvL', 
    calm: 'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO',      
    angry: 'https://open.spotify.com/playlist/67STztGl7srSMNn6hVYPFR?si=5a7c0f48e53b4405',    
    relaxed: 'https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj',  
    confused: 'https://open.spotify.com/playlist/37i9dQZF1DX7gIoKXt0gmx', 
  };

  const playlist = moodPlaylists[mood] || 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6'; // default playlist

  return (
    <div>
      <h3>🎧 Music:</h3>
      <a
        href={playlist}
        className="spotify-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="spotify-logo" aria-label="Spotify">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#1DB954"/>
            <path d="M17.25 16.25C15.25 15.25 12.75 15 10.5 15.5C9.5 15.75 8.5 16.25 8 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M17 13.5C15.25 12.5 10.75 12.25 8.5 13C8 13.25 7.5 13.5 7.25 13.75" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16.5 11C15 10.25 11.5 10 9.5 10.5C8.5 10.75 7.5 11.25 7 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
        Open playlist on Spotify
      </a>
    </div>
  );
}

export default MusicSection;
