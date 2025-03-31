import './App.css'
import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({count : this.state.count + 1});
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.increase}>버튼</button>
      </div>
    )
  }
}


export default App
