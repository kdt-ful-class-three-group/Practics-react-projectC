import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(10); // 상태 초기화 (count = 0)

  return (
    <div style={ {textAlign : 'center' , marginTop : '50px'}}>
      <h1>카운터: {count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
}
export default Counter;

// import React, { Component } from 'react';
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <h1>카운터: {this.state.count}</h1>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     );
//   }
// }

