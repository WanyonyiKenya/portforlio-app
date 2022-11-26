import React from 'react'
import './services.css'
import {BiCheckDouble} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
              <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheckDouble className='service__list-icon' />
              <p> Creating static websites with pure HTML and CSS </p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon' />
              <p> Creating Responsive Web user Interfaces with React JS</p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon' />
              <p> I can also manage server files with node Js </p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon' />
              <p> I can educate and mentor given chance and opportunity </p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon' />
              <p> Write and deploy code in Pure Vanilla Javascript </p>
            </li>
            <li>
              <BiCheckDouble className='service__list-icon' />
              <p>Create a fully operational and functional web page.. </p>
            </li>
          </ul>
        </article>

       
      </div>
    </section>
  )
}

export default Services