import React from 'react'
import './App.css'

/**
 * * Counter 라는 애를 React.Component라는 부모요소의 자식요소Class로 만든다.
 * * 클래스 컴포넌트를 만드는 기본적인 방법.
 */
class Counter extends React.Component { 

  /**
   * * 클래스 컴포넌트의 생성자 함수를 정의하는 방법입니다.
   */
  constructor () {

    // * 부모 클래스(React.Component)의 생성자를 호출하는 함수
    // * 클래스 컴포넌트의 constructor 안에서는 반드시 super()를 먼저 호출해야 this 키워드를 사용할 수 있다.
    super()

    // * 여기서 this는 Counter 클래스
    // * this의 동적 데이터 count의 초기 값을 0으로 둔다.
    this.state = { count: 0 }

    // ! 만약 화살표 함수를 쓰지 않고 this를 바인딩 하기 위해서는
    // ! 아래와 같이 this.함수 = this.함수.bind(this)를 지정 해줘야 한다.
    // this.incrementCount = this.incrementCount.bind(this);
    // this.decreasementCount = this.decreasementCount.bind(this);
  // * 여기서 constructor를 닫아준다. 
  }
  
  // * function을 사용하지 못하고, 화살표 함수를 사용하는 이유는 this가 제대로 바인딩 되지 않아서, thisSetState를 호출할 수 없다.


  incrementCount = () => {
    this.setState({ count: this.state.count + 1 }); 
  }
  // ! constructor에서 바인딩을 해주면 쓸 수 있는 코드
  // incrementCount () {
  //   this.setState({ count: this.state.count + 1 }); 
  // }
  decreasementCount = () => {
    this.setState({ count: this.state.count - 1 }); 
  }
  // ! constructor에서 바인딩을 해주면 쓸 수 있는 코드
  // decreasementCount () {
  //   this.setState({ count: this.state.count - 1 }); 
  // }
  
  /**
   * 
   * * render()는 리액트 클래스 컴포넌트에서 반드시 구현해야 하는 메소드 중 하나. 
   * * 이 메소드는 컴포넌트가 화면에 렌더링될 때 호출
   * * incrementCount나 decreasementCount 메소드에서 this.setState()를 호출하여 count 상태가 변경되면, 리액트는 Counter 컴포넌트의 render() 메소드를 다시 호출
   * 
   */
  render() {  
    return (
      // * 랜더 할 때는 부모요소가 한개는 꼭 필요하다.
      <>
      <div>
        클릭하면 카운트가 올라갑니다.
      </div>
      <div className="counter">카운트 = {this.state.count}
        <button onClick={this.incrementCount}>
          +
        </button>
        <button onClick={this.decreasementCount}>
          -
        </button>
      </div>
    </>
  )
}
}

  export default Counter
