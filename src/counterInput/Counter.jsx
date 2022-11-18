import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1)
  }

  function decrease() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default Counter