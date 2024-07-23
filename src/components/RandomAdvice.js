import React, { useState, useEffect } from 'react';

function RandomAdvice() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice));
  }, []);

  return (
    <div>
      <h1>Random Advice</h1>
      <p>{advice}</p>
    </div>
  );
}

export default RandomAdvice;
