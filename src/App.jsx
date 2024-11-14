import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
