import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(prevCount => prevCount +1)
  }

  const minusCount = () => {
    setCount(prevCount => Math.max(prevCount-1 , 0))
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>+</button>
      <button onClick={minusCount}>-</button>
    </div>
  )
}

export default Counter