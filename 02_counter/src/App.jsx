import React, { useState } from 'react'

const App = () => {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter+1)
  }

  const removevalue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    } else {
      
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
