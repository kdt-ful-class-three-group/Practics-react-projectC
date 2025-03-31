import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.count = 0
  }

  addCount = () => {
    this.count += 1;
    this.forceUpdate() //강제 화면 갱신
  }

  minusCount = () => {
    this.count -= 1
    
    if (this.count < 0) {
      this.count = 0
    }
    this.forceUpdate()//강제 화면 갱신
  }

  render() {
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={addCount}>+</button>
        <button onClick={minusCount}>-</button>
      </div>)
  }
}

export default Counter