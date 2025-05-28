import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GifSection({ mood }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
          params: {
            api_key: 's9EtKv6suKRCzYy8hKdd6yT7rM4Wn2Kv', 
            q: mood,
            limit: 3
          }
        });
        setGifs(res.data.data);
      } catch (err) {
        console.error('Error fetching GIFs:', err);
      }
    };

    fetchGifs();
  }, [mood]);

  return (
    <div>
      <h3>🎬 Mood GIFs:</h3>
      {gifs.map(gif => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={mood} />
      ))}
    </div>
  );
}

export default GifSection;
