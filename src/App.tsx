import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Gallery } from './pages/Gallery'
import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
