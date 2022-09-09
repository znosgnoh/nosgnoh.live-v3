import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
// import Posts from '~/pages/Posts'
// import Gallery from '~/pages/Gallery'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/blog' element={<Posts />} />
          <Route path='/gallery' element={<Gallery />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
