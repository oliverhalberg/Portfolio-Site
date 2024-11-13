import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* Footer goes here */}
    </div>
  )
}

export default App
