import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<p>TODO</p>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
