import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count:0} // count를 state로 관리
  }

  addCount = () => {
    this.setState(prevState => ({count:prevState.count+1})) //state 변경
  }

  minusCount = () => {
    this.setState(prevState => ({count:Math.max(prevState.count -1, 0)}))// 0보다 작으면 0이 할당됨
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>+</button>
        <button onClick={this.minusCount}>-</button>
      </div>)
  }
}

export default Counter