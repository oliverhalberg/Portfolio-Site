import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import ResumeDisplay from './components/ResumeDisplay'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<ResumeDisplay />} />
          {/* This might not be the cleanest solution, but it solves a problem where React Router would try to handle a request from the <object> tag in the ResumeDisplay component. */}
          <Route path='/pdfs/oliverhalberg.pdf#zoom=100%' element={<Navigate replace to={'https://oliverhalberg.com/resume-files/oliverhalberg.pdf'} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
