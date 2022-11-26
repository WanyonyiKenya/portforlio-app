import React from 'react'
import './port.css'
import IMG1 from '../../Assets/port1.jpg'
// import IMG2 from '../../Assets/port2.jpg'
// import IMG3 from '../../Assets/port3.jpg'
// import IMG4 from '../../Assets/port4.jpg'
// import IMG5 from '../../Assets/port5.jpg'
// import IMG6 from '../../Assets/port6.jpg'


const DATA = [
  {
    id:1,
    Image:IMG1,
    title:"I havent worked on Many projects yet, but i will be making and updting the here in the future, i have quite a few projects on the github page",
    github: "ttps://github.com/WanyonyiKenya",
    demo:'htpps://twitter.com'
  },
]
//   {
//     id:2,
//     Image:IMG2,
//     title:"Çryptocurrency dashboard and financial visualization",
//     github: "https://github.com",
//     demo:'htpps://twitter.com'
//   },
//   {
//     id:3,
//     Image:IMG3,
//     title:"Çryptocurrency dashboard and financial visualization",
//     github: "https://github.com",
//     demo:'htpps://twitter.com'
//   },
//   {
//     id:4,
//     Image:IMG4,
//     title:"Çryptocurrency dashboard and financial visualization",
//     github: "https://github.com",
//     demo:'htpps://twitter.com'
//   },
//   {
//     id:5,
//     Image:IMG5,
//     title:"Çryptocurrency dashboard and financial visualization",
//     github: "https://github.com",
//     demo:'htpps://twitter.com'
//   },
//   {
//     id:6,
//     Image:IMG6,
//     title:"Çryptocurrency dashboard and financial visualization",
//     github: "https://github.com",
//     demo:'htpps://twitter.com'
//   }
// ]



const Port = () => {
  return (
    <section>
      <h5>My Rececent Work</h5>
      <h2>Portfolio</h2>

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
            <a href={github} className='btn' target="_blank">Github</a>
          <a href={demo} className='btn btn-primary' target="_blank" rel= 'noopener noreferrer'>Tweet</a>
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