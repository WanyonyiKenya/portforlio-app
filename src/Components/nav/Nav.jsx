import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsLine} from 'react-icons/ri'



const Nav = () => { 
const[active, setActive]= React.useState("#header")

  return (
    <nav>
      <a href='#header' onClick={()=>setActive("#header")} className = {active === "#header" ? "active ": ""}><AiOutlineHome /></a>
      <a href='#about' onClick={()=>setActive("#about")} className = {active === "#about" ? "active ": ""} ><AiOutlineUser /></a>
      <a href='#experience' onClick={()=>setActive("#experience")} className = {active === "#experience" ? "active ": ""}><AiFillBook /></a>
      <a href='#services' onClick={()=>setActive("#services")} className = {active === "#services" ? "active ": ""}><RiServiceLine /></a>
      <a href='#contact' onClick={()=>setActive("#contact")} className = {active === "#contact" ? "active ": ""}><RiContactsLine /></a>

    </nav>
  )
}

export default Nav