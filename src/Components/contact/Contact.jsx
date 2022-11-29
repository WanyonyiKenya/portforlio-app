import React from 'react'
import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {TbBrandMessenger} from 'react-icons/tb'
import {SiWhatsapp} from 'react-icons/si'

import  { useRef } from 'react';
import emailjs from '@emailjs/browser'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_5jh8mtl', 'service_5jh8mtl', form.current, '1wdNhdHVILw4SE9L4')
    
    e.target.reset();
  }


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdMarkEmailRead className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Email Brian</h5>
            <a href='mailto:mmasafujnr@gmail.com' target="_blank" rel= 'noopener noreferrer'>Send a mesage</a>
          </article>
          <article className='contact__option'>
            <TbBrandMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Connect with Brian on Messenger</h5>
            <a href='https://m.me/reizybrian' target="_blank" rel= 'noopener noreferrer'>Send a mesage</a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Chat with me on Whatsapp</h5>
            <a href='https://api.whatsapp.com/send?phone+254716169029' target="_blank">Send a mesage</a>
          </article>
        </div>
        <form ref={form} onSubmit= {sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact