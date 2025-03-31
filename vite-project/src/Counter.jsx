import React from 'react';

class Counter extends React.Component {

    constructor() {

    super()
        this.state ={     //초기 state의 값은 객체여야 함 객체의 값으로 변화를 추적하기 때문
        counter: 0
        }

    }

    increase = () =>{
        this.setState({ counter: this.state.counter + 1})
    }
    decrease = () =>{
        this.setState({counter: this.state.counter - 1})
    }


  render() {
        return(
            <div>
            <div className="counter">카운터 {this.state.counter}</div>
            <button className="counterincrease" onClick={this.increase}>+ 버튼</button>
            <button className="counterincrease" onClick={this.decrease}>- 버튼</button>

            </div>
        )
  }
}

export default Counter