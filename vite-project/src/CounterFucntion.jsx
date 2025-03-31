import {useState} from "react"


export default function CounterFucntion() {
    const [counter, setCounter] = useState(0)

    const increase = () =>{setCounter(counter + 1)}
    const decrease = () =>{setCounter(counter - 1)}




    return (
        <div>
            <div>함수형 !!</div>
            <div className="counter">카운터 {counter}</div>
            <button className="increaseBtn" onClick={increase}>+ 버튼</button>
            <button className="decreaseBtn" onClick={decrease}>- 버튼</button>
        </div>
    )
}


