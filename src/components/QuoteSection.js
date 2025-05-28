import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuoteSection({ mood }) {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get('https://api.allorigins.win/raw?url=https://zenquotes.io/api/random')
      .then(res => {
        const data = JSON.parse(res.data);
        if (data && data[0]) {
          setQuote(data[0].q + " — " + data[0].a);
        } else {
          setError('No quote found');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching quote:', err);
        // fallback quote:
        setQuote("The best way to get started is to quit talking and begin doing. — Walt Disney");
        setLoading(false);
      });
  }, [mood]);

  return (
    <div>
      <h3>📜 Quote:</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <p>"{quote}"</p>}
    </div>
  );
}

export default QuoteSection;
