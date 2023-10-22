import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import {
  businesspage1,
  circular_earth,
  hibiscusflower,
  hyperrealisticimage_bus,
  landingpage,
  western_cowboy,
} from '../assets'
import './Portfolio.css'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { ThemeContext } from '../App'
const Portfolio = () => {
  const theme = useContext(ThemeContext)
  const projects = [
    { id: 1, title: 'A business page', img: businesspage1 },
    { id: 2, title: 'A landing page', img: landingpage },
    { id: 3, title: 'Flower', img: hibiscusflower },
    { id: 4, title: 'Earth', img: circular_earth },
    { id: 5, title: 'Bus', img: hyperrealisticimage_bus },
    { id: 6, title: 'Cowboy', img: western_cowboy },
  ]
  return (
    <div className="portfolio-container relative mt-[8rem] sm:mt-[2rem]">
      <h1 className="heading m-2 sm:m-0">Projects Gallery</h1>
      <Swiper
        className="swiper-container relative flex justify-center items-end"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          enabled: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {projects.map((pro) => (
          <SwiperSlide key={pro.id} className="swiper-item max-h[20rem]">
            <img
              className="object-cover text-center ml-[4rem] sm:m-0"
              src={pro.img}
              alt={pro.title}
            />
          </SwiperSlide>
        ))}
        <div className="slider-controller absolute bottom-[10rem] flex justify-between w-full">
          <div className="swiper-button-prev slider-arrow">
            <FaArrowCircleLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaArrowCircleRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Portfolio
