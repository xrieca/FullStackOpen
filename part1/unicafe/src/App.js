import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good*1 + bad*(-1))/all
  const positive = ((good / all)*100)

  if (all === 0){
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <div>
      <StatisticLine text="Good" value={good}/>
      <StatisticLine text="Neutral" value={neutral}/>
      <StatisticLine text="Bad" value={bad}/>
      <StatisticLine text="All" value={all}/>
      <StatisticLine text="Average" value={(avg).toFixed(1)}/>
      <StatisticLine text="Positive" value={`${(positive).toFixed(1)}%`}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseGood} text={"Good"}/>
      <Button onClick={increaseNeutral} text={"Neutral"}/>
      <Button onClick={increaseBad} text={"Bad"}/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

export default App