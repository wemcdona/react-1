import React, { useState } from 'react';

const Madlibs = () => {
  const [words, setWords] = useState({
    noun1: '',
    noun2: '',
    adjective: '',
    color: ''
  });

  const [story, setStory] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWords({ ...words, [name]: value });
  };

  const generateStory = () => {
    const { noun1, noun2, adjective, color } = words;
    setStory(`Once upon a time, there was a ${adjective} ${noun1} who loved a ${color} ${noun2}.`);
  };

  return (
    <div>
      <h1>Madlibs!</h1>
      <input
        type="text"
        name="noun1"
        value={words.noun1}
        onChange={handleChange}
        placeholder="noun"
      />
      <input
        type="text"
        name="noun2"
        value={words.noun2}
        onChange={handleChange}
        placeholder="noun"
      />
      <input
        type="text"
        name="adjective"
        value={words.adjective}
        onChange={handleChange}
        placeholder="adjective"
      />
      <input
        type="text"
        name="color"
        value={words.color}
        onChange={handleChange}
        placeholder="color"
      />
      <button onClick={generateStory}>Get Story</button>
      {story && <p>{story}</p>}
    </div>
  );
};

export default Madlibs;
