import React, { useState, useEffect } from 'react';
import './App.css';
import MoodInput from './components/MoodInput';
import QuoteSection from './components/QuoteSection';
import GifSection from './components/GifSection';
import MusicSection from './components/MusicSection';

function App() {
  const [mood, setMood] = useState('');

  useEffect(() => {
    document.title = 'ZenVibe';
  }, []);

  return (
    <div className="App">
      <h1>ZenVibe</h1>
      <MoodInput setMood={setMood} />
      {mood && (
        <>
          <h2>Your mood: {mood}</h2>
          <QuoteSection mood={mood} />
          <GifSection mood={mood} />
          <MusicSection mood={mood} />
        </>
      )}
    </div>
  );
}

export default App;
