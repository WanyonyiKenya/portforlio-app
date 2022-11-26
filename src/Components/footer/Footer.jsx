import React from 'react'
import './footer.css'
import {FiTwitter} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {IoLogoInstagram} from 'react-icons/io'
import { MdFace } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo'>Brian Wanyonyi <MdFace/> </a>


      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook /></a>
        <a href="https://instagram.com"><IoLogoInstagram /></a>
        <a href="https://twitter.com"><FiTwitter /></a>

      </div>
      <div className='footer__copyright'>
        
        <small>&copy; Brian Wanyonyi &copy; 2022, All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer