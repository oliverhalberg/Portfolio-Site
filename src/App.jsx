import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import ResumeDisplay from './components/ResumeDisplay.jsx'
import NotFound from './components/NotFound.jsx'

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
          <Route path='/pdfs/oliverhalberg.pdf*' element={<Navigate replace to={'https://oliverhalberg.com/pdfs/oliverhalberg.pdf'} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
