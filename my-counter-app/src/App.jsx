import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from './Counter';
import CounterSet from './CounterSet'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>홈 페이지</h1>
        <p>이곳은 React Router를 이용한 홈 페이지입니다.</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/counter">카운터</Link></li>
            <li><Link to="/counterSet">카운터 세팅</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counterSet" element={<CounterSet />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
