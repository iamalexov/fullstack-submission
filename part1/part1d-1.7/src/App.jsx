import { useState } from 'react'


const History = (props) => {
  (props.allClicks.length === 0)
  return (
    <div>
      {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => 
    {
  setAll(allClicks.concat(' '));
    const updateGood = good + 1;
    const newTotal=total + 1;
    const newPositive = (updateGood / total) * 100 || 0;
    const newAverage = (updateGood - bad) / total || 0;
    
    setGood(updateGood);
    setTotal(newTotal);
    setPositive(newPositive);
    setAverage(newAverage);
    
  };

  const handleNeutralClick = () => {
     setAll(allClicks.concat(' '))
    const updateNeutral = neutral + 1;
    const newTotal=total + 1;

    const newPositive = (good / total) * 100 || 0;
    const newAverage = (good - bad) / total || 0;
    
    
    setNeutral(updateNeutral);
    setTotal(newTotal);
    setPositive(newPositive);
    setAverage(newAverage);
  };

  const handleBadClick = () => {
    setAll(allClicks.concat(' '))
    const updateBad = bad + 1;
    const newTotal=total + 1;

    
    const newPositive = (good / newTotal) * 100 || 0;
    const newAverage = (good - bad) / newTotal || 0;
    
    setBad(updateBad);
    setTotal(newTotal);
    setPositive(newPositive);
    setAverage(newAverage);
  };

  



  return (
    <div>

      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <h1>statistics</h1>
      <p>
        Good:{good}
      </p>

      <p>
        neutral:{neutral}
      </p>
      <p>
        bad {bad}

      </p>
      <History allClicks={allClicks} />

      <p>
        Total: {total}
      </p>
     <p>
     </p>
     <p>average: {average.toFixed(2)}</p>
     <p>positive: {positive.toFixed(2)}%</p>
    </div>

  )
} 

  export default App 