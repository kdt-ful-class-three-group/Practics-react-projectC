import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Counter from './Counter' //카운터 페이지


function App() {
  return (
    <Router>
      <Routes>
        {/* 첫페이지 */}
        <Route path='/' element={
          <div className='first-page'>
            <h1>COUNTER</h1>
            {/* 첫페이지에서 카운터 페이지로 이동 */}
            <Link to='/counter'>
              <button>시작하기</button>
            </Link>
          </div>
        } />
        {/* 카운터 페이지 */}
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </Router>
  )
}

export default App
