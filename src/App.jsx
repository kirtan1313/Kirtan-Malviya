import About from './Components/About/About'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Services from './Components/Services/Services'
// import Projects from './Components/Projects/Projects'
// import Contact from './Components/Contact/Contact'
// import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {
  

  return (
    <>
     {/* <Header /> */}
     <Home/>
     {/* <About /> */}
     {/* <Services /> */}
     {/* <Projects /> */}
     {/* <Contact /> */}
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}

    </>
  )
}

export default App
