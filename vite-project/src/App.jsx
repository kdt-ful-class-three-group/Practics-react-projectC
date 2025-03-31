import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterFucntion from "./CounterFucntion.jsx";
import Counter from "./Counter.jsx";

function App() {

    return(
        <div>
        <CounterFucntion/>
            <Counter/>
        </div>
    )


}

export default App
