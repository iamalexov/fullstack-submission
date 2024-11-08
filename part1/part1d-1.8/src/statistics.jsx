import React from 'react';

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <div>
        <h2>
            Statistics
        </h2>
    </div>;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive: {positive.toFixed(2)}%</p>
    </div>
  );
};

export default Statistics;
