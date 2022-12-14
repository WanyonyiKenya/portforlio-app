import React from 'react'
import './testimonial.css'
import AV1 from '../../Assets/av1.png'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AV1,
    name:'Ndiritu Michael, (Mobile Developer)',
    review:"Brian is a great person. I have been privileged to work with him on a personal level and a collaborative project and I can not lie about how amazing, dedicated and a serious person he is wihen it comes to work.His work ethic is nothing short of admirable."
  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
       {
        data.map(({avatar,name,review},index) => {
          return(
            <SwiperSlide key={index} className="testimonials">
            <div className="client__avatar">
              <img src={avatar}alt={name}/>
  
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
          </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonial