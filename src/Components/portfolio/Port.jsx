import React from 'react'
import './port.css'
import IMG1 from '../../Assets/todoApp.png'
 import IMG2 from '../../Assets/tenzy.png'
 import IMG3 from '../../Assets/port33.png'
// import IMG4 from '../../Assets/port4.jpg'
// import IMG5 from '../../Assets/port5.jpg'
// import IMG6 from '../../Assets/port6.jpg'


const DATA = [
  {
    id:1,
    Image:IMG1,
    title:"I am proud of myself for doing this project. It was one of the first projects  i did but could ot post it on my Git page because i had none. In this todo app, i can creae,edit,delete a task, delete completed tasks, filter task as all, active and completed and also a special feature i added is that for every new edit, the task moves to the top of the page.",
    github: "https://github.com/WanyonyiKenya/todo-app22",
    demo:'htpps://twitter.com'
  },

  {
    id:2,
    Image:IMG2,
    title:"This is an app i created with the help of Scrimba. This is an app that enabled me experiment the dice based tenzies game. It was superb doing this project and am happy because the project was a success and enabled me learn new skills.",
    github: "https://github.com/WanyonyiKenya/tenzies-game",
    demo:'htpps://twitter.com'
  },

   {
     id:3,
     Image:IMG3,
     title:"A good developer must have a good portfoli they say. I did make this app to enable me market myself and put my skills on display. I am thrilled on hoew this project turned out. It is one of my favorite projects so far. I must credit and praise myself since i did put in some amazing stuff in this project and it is a success for real.",
     github: "https://github.com/WanyonyiKenya/portforlio-app",
     demo:'htpps://twitter.com'
   },
  ]
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