import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // () => {
  //   setCount(count + 1);
  // }
  return (
    <div>
      <div>{count}</div>
      <button onClick = {() => {setCount(count + 1)}}>버튼</button>
    </div>
  )
}


export default App
