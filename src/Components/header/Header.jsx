import React from 'react'
import './header.css'
import  Extra from './Extra'
import Me from '../../Assets/profile.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className='myname'>Brian Wanyonyi</h1>
        <h5 className='text-light'>Front-End Developer</h5> 
        <Extra />
        <Socials />
        <div className="me">
          <img src = {Me} alt = "me"/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header