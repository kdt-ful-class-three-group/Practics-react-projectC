import React, { useState } from "react";
import { Div, Heading } from "./Tag";
import { Button } from "./Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Div className="counter">
      <Div>카운트</Div>
        
      <Heading>{count}</Heading>

      <Div>
        <Button btnName={-100} onClick={()=> setCount(count - 100)} />
        <Button btnName={-10} onClick={()=> setCount(count - 10)} />
        <Button btnName={-1} onClick={()=> setCount(count - 1)} />
        <Button btnName={+1} onClick={()=> setCount(count + 1)} />
        <Button btnName={+10} onClick={()=> setCount(count + 10)} />
        <Button btnName={+100} onClick={()=> setCount(count + 100)} />
      </Div>
    </Div>
  )
}
 