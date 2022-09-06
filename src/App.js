import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Gallery from './page/Gallery'
import Timeline from './page/Timeline'
import About from './page/About'
import Contact from './page/Contact'
import Footer from './component/Footer'
import Logo from './component/Logo'
import NavBar from './component/NavBar'
import "./bootstrap.css"
import './index.css'

 function App() {
  return (
    <div className='container-fluid'>
        <header>
          <Logo/>
          <NavBar/>
        </header>
        <Routes>
          <Route  path='/' element={<Gallery/>} />
          <Route  path='/Timeline.js' element={<Timeline/>} />
          <Route path='/About.js' element={<About/>} />
          <Route  path='/Contact.js' element={<Contact/>} />
        </Routes>
        <Footer/>
    </div>
  )
}
export default App