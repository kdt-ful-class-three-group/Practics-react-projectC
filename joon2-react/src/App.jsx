import React from "react";
import { Div,Heading } from "./components/Tag";
import { Counter } from "./components/Counter";

import './App.css'

const App = () => (
    <Div className="main">
      <Heading number={1}>카운터 앱만들기</Heading>
      <Div>
        <Counter />
      </Div>
    </Div>
);

export default App;