import React, { useState, useEffect } from 'react';

function AdviceList() {
  const [adviceList, setAdviceList] = useState([]);

  useEffect(() => {
    fetchAdvices(5);
  },[]);

  const fetchAdvices = (num) => {
    Promise.all(
      Array.from({ length: num }, () =>
        fetch('https://api.adviceslip.com/advice').then(response => response.json())
      )
    ).then(results => setAdviceList(results.map(result => result.slip.advice)));
  };

  return (
    <div>
      <h1>Advice List</h1>
      <ul>
        {adviceList.map((advice, index) => (
          <li key={index}>{advice}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdviceList;

