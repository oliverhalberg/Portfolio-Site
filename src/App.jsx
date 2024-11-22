import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import ResumeDisplay from './components/ResumeDisplay'

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<ResumeDisplay />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
