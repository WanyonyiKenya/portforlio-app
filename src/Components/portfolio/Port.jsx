import React from 'react'
import './port.css'
import IMG1 from '../../Assets/pp3.jpg'
 import IMG2 from '../../Assets/tenzy.png'
 import IMG3 from '../../Assets/port33.png'
 import IMG4 from '../../Assets/admin.jpg'
import IMG5 from '../../Assets/pp2.jpg'
 import IMG6 from '../../Assets/pp1.jpg'


const DATA = [
  {
    id:1,
    Image:IMG1,
    title:"A fully responsive TOUR/TRAVEL web Application making full use of Dynamic components in React and Javascript",
    github: "https://github.com/WanyonyiKenya/Tour-travel-app/tree/master/travel-app",
    demo:'https://tour-83f3lb2lk-wanyonyikenya.vercel.app/'
  },

  {
    id:2,
    Image:IMG2,
    title:"This is an app i created with the help of Scrimba. This is an app that enabled me experiment the dice based tenzies game. ",
    github: "https://github.com/WanyonyiKenya/tenzies-game",
    demo:'htpps://twitter.com'
  },

   {
     id:3,
     Image:IMG3,
     title:"A good developer must have a good PORTFOLIO. I did make this app to enable me market myself and put my skills on display. I am thrilled on how this project turned out.",
     github: "https://github.com/WanyonyiKenya/portforlio-app",
     demo:'htpps://twitter.com'
   },
  
   {
     id:4,
     Image:IMG4,
     title:"This is a simple ADMIN DASHBOARD that i made to see how i can manage in an enterprise when we have a lot of structural data flowing through each section/department..",
     github: "https://github.com/WanyonyiKenya/admin-dashboard",
     demo:'https://admin-dashboard-omega-three.vercel.app/'
   },
   {
     id:5,
     Image:IMG5,
     title:"This a fully responsive project for a GYM FIRM showcasing my skills in Typescript.",
     github: "https://github.com/WanyonyiKenya/GYM-Ts",
     demo:'https://gym-ts-one.vercel.app/'
   },
  
   {
     id:6,
     Image:IMG6,
     title:"This is a  WEATHER FORECAST app making use of  The Weather and GeoDB ApI's",
     github: "https://github.com/WanyonyiKenya/Weather_app-and-Forecast",
     demo:'https://weather-app-and-forecast.vercel.app/'
   }
 ]



const Port = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Featured Projects</h2>

      <div className="container portfolio__container">
        {
          DATA.map(({id, Image, github, title, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Image} alt ={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target="_blank" rel= 'noopener noreferrer'>Github</a>
          <a href={demo} className='btn btn-primary' target="_blank" rel= 'noopener noreferrer'>Live Demo</a>
          </div>
          
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Port