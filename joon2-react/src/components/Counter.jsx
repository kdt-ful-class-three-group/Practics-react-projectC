import React from "react";
import { Div, Heading } from "./Tag";
import { Button } from "./Button";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  changeCount = (amount) => {
    this.setState((prevState) => ({
      count: prevState.count + amount,
    }));
  };
  render() {
    return (
      <Div className="counter">
        <Div>카운트</Div>
        
        <Heading>{this.state.count}</Heading>
        
        <Div>
          <Button btnName={-100} onClick={this.changeCount} />
          <Button btnName={-10} onClick={this.changeCount} />
          <Button btnName={-1} onClick={this.changeCount} />
          <Button btnName={+1} onClick={this.changeCount} />
          <Button btnName={+10} onClick={this.changeCount} />
          <Button btnName={+100} onClick={this.changeCount} />
        </Div>
      </Div>
    )

  }
}