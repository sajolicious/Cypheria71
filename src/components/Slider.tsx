// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import team1 from '../img/team1.webp'
import team2 from '../img/team2.webp'
import team3 from '../img/team3.webp'
import team4 from '../img/team4.webp'
const OurServices: React.FC = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={team1} alt="team1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={team2} alt="team2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={team3} alt="team3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={team4} alt="team4" />
      </SwiperSlide>
    </Swiper>
  )
}

export default OurServices
