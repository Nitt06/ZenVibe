import React, { useState } from 'react';

function MoodInput({ setMood }) {
  const [selectedMood, setSelectedMood] = useState('');

  const moods = [
    'happy',
    'sad',
    'excited',
    'motivated',
    'calm',
    'angry',
    'relaxed',
    'confused',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMood) {
      setMood(selectedMood);
      setSelectedMood(''); // reset dropdown
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedMood}
        onChange={(e) => setSelectedMood(e.target.value)}
        required
      >
        <option value="" disabled>
          Select your mood
        </option>
        {moods.map((mood) => (
          <option key={mood} value={mood}>
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </option>
        ))}
      </select>
      <button type="submit">Generate</button>
    </form>
  );
}

export default MoodInput;
