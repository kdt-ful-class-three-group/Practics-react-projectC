// * react 중에서 useState기능을 쓰겠다고 선언하는 문.
import { useState } from 'react'
import './App.css'

/**
 * 
 * * App이라는 이름의 함수형 컴포넌트를 선언.
 * * React에서 함수형 컴포넌트는 단순히 JavaScript 함수로서, props라는 인자를 받아서 React 엘리먼트(JSX)를 반환하는 역할을 함.
 */
function App() {
  const [count, setCount] = useState(0);

  /**
   * * 화살표 함수를 쓰지 않기 위해서 handlePlus라는 함수에 setCount(count => count + 1) 함수를 넣어준다.
   */
  // function handlePlus () {
  //   setCount(count => count + 1); 
  // };

    /**
   * * 화살표 함수를 쓰지 않기 위해서 handleMinus이라는 함수에 setCount(count => count - 1) 함수를 넣어준다.
   */
  // function handleMinus () {
  //   setCount(count => count - 1); 
  // };


  // * 함수 자체가 렌더링 로직을 포함하고 있기 떄문에 따로 render() 선언을 해주지 않아도 됨.
  return (
    <>
      <div>
        클릭하면 카운트가 올라갑니다.
      </div>
      <div className="card">
      카운트 = {count}
        <button onClick={() => setCount((count)=> count + 1)}>+
        {/* <button onClick={handlePlus}>+ */}
        </button>
        <button onClick={() => setCount((count)=> count - 1)}>-
        {/* <button onClick={handleMinus}>- */}
        </button>
      </div>
    </>
  )
}

export default App
