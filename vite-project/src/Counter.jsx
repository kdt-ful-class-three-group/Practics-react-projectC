import React, {Component} from 'react'

function Counter() {
  let count = 0

  function addCount() {
    count += 1
    document.getElementsByTagName('h1')[0].innerHTML=count
  }
  function minusCount() {
    count -= 1
    if (count < 0) {
      count = 0
    }
    document.getElementsByTagName('h1')[0].innerHTML=count
  }
  
  return <div>
    <h1>{count}</h1>
    <button onClick={addCount}>+</button>
    <button onClick={minusCount}>-</button>
  </div>
}

export default Counter