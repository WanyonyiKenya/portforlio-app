import React from 'react'
import  './about.css'
import IM from '../../Assets/user.jpg'
import {CgWorkAlt} from 'react-icons/cg'
import {FaUsers} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {SlEmotsmile} from 'react-icons/sl'
import {VscGithub} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src= {IM} alt='about' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              < CgWorkAlt className='about__icon'/>
              <h5>Clients</h5>
              <small>I currently have no clients, <b>You might be the first! <SlEmotsmile /></b></small>
            </article>

            <article className='about__card'>
              < FaUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>One year coding experience</small>
            </article>

            <article className='about__card'>
              < AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small><a href='https://github.com/WanyonyiKenya?tab=repositories' target='_blank' rel= 'noopener noreferrer'>See my Github < VscGithub/></a></small>
            </article>
          </div>
          <p>
            Technology was one of the main issues that drove me into this career path,
            I love gadgets,the thrill and excitement that comes with them.
            I always say programming chose me and in turn i fell in love with coding. I am pretty good in Vanilla Javascript,
            HTML, CSS and Bootsrap. I am currently learnng CSS tailwind and using my Javascript skills to learn React Js.
            I am ready to eork in any environment to help me improve my at a production level.
            <b>It is productive, a good choice and fun having me on your time </b>
            I hold a Computer Sciece degree from masinde Muliro University of Science and Technology.
          </p>
          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About