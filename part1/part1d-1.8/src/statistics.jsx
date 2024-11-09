import React from 'react';


const StatisticLine = ({ text, value }) => {
  return (
    <p>{text}: {value}</p>
  );
};



const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <div>
        <h2>
            No feedback given
        </h2>
    </div>;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={average.toFixed(2)} />
      <StatisticLine text="Positive" value={positive.toFixed(2) + "%"} />
    </div>
  );
};

export default Statistics;
