import React, {useState} from 'react';

function CounterSet() {
  const [count, setCount] = useState(0); // 상태 초기화 (count = 0)

  return (
    <div style={ {textAlign : 'center' , marginTop : '50px'}}>
      <h1>카운터: {count}</h1>      
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
}

export default CounterSet