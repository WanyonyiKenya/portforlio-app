import React from 'react'
import './testimonial.css'
import AV1 from '../../Assets/av1.jpg'
import AV2 from '../../Assets/av2.jpg'
import AV3 from '../../Assets/av3.jpg'
import AV4 from '../../Assets/av4.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AV1,
    name:'Kruger Janes',
    review:"Quotes testimonials are one of the best testimonial examples. These brief stories are highly effective, convincing, and impactful, especially when the customer’s name, firm, and images are included. Visitors are encouraged to trust that the acquisition they consider is the proper one by using quotes. Quotes are easy to come by, but they’re also easy to create. This is something that businesses are aware of. Many people include hero photographs in their testimonials for this reason."
  }, {
    avatar:AV2,
    name:'Jakob Mahome',
    review:"Quotes testimonials are one of the best testimonial examples. These brief stories are highly effective, convincing, and impactful, especially when the customer’s name, firm, and images are included. Visitors are encouraged to trust that the acquisition they consider is the proper one by using quotes. Quotes are easy to come by, but they’re also easy to create. This is something that businesses are aware of. Many people include hero photographs in their testimonials for this reason."
  },
  {
    avatar:AV3,
    name:'Refsrt Khalsfischer',
    review:"Quotes testimonials are one of the best testimonial examples. These brief stories are highly effective, convincing, and impactful, especially when the customer’s name, firm, and images are included. Visitors are encouraged to trust that the acquisition they consider is the proper one by using quotes. Quotes are easy to come by, but they’re also easy to create. This is something that businesses are aware of. Many people include hero photographs in their testimonials for this reason."
  },
  {
    avatar:AV4,
    name:'Small Joker',
    review:"Quotes testimonials are one of the best testimonial examples. These brief stories are highly effective, convincing, and impactful, especially when the customer’s name, firm, and images are included. Visitors are encouraged to trust that the acquisition they consider is the proper one by using quotes. Quotes are easy to come by, but they’re also easy to create. This is something that businesses are aware of. Many people include hero photographs in their testimonials for this reason."
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