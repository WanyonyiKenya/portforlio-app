import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Experience from './Components/Experiemce/Experience'
import Services from './Components/services/Services'
import Port from './Components/portfolio/Port'
import Testimonial from './Components/testimonial/Testimonial'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'


const App = () => {
  return (
    <div>
        <Header />
        <Nav /> 
        <About />
        <Experience />
        <Services />
        <Port />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
  )
}

export default App