import { useState } from 'react'


const Total = (props) => {
  if(props.allClicks.length === 0) {
    return (
      <div>

      </div>
    )
  }
  return (
    <div>
      {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)


  

  return (
    <div>

   <h1>give feedback</h1>

    <button onClick={() => setGood(good + 1)}>
      good
    </button>

    <button onClick={() => setNeutral(neutral + 1)}>
    neutral
    </button>

    <button onClick={() => setBad(bad + 1)}>
    bad
    </button>

  <h1>statistics</h1>
<p> 
  good{good}
</p>

<p>
  neutral{neutral}
</p>
<p>
neutral{bad}

</p>

<p> 
  Total: {total} 
</p>
 

    </div>
  )
}
 
export default App
