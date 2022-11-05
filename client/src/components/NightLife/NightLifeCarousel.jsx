import React from 'react'
import { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
// import "swiper/css";
// import "swiper/css/navigation";
import {Navigation} from 'swiper'
import PosterCard from '../PosterCard';



function NightLifeCarousel() {
    const [items,setItem] = useState([
        {
            image:"https://b.zmtcdn.com/data/collections/6ef572662529fbe547628e6471d49bc0_1647242535.jpg?output-format=webp",
            title:"Newly Opened",
            places:"15 Places"
        },
        {
            image:"https://b.zmtcdn.com/data/collections/4c645d68d0ad4c624abab81374c8997c_1582106595.jpg?output-format=webp",
            title:"Best of Mumbai",
            places:"136 Places"
        },
        {
            image:"https://b.zmtcdn.com/data/collections/e115f03b956656abde558d69810a9c9c_1647244634.jpg?output-format=webp",
            title:"Trending This Weak",
            places:"30 Places"
        },
        {
            image:"https://b.zmtcdn.com/data/collections/5a797771e7802af5b8c3a3dbcdadcac4_1647245603.jpg?output-format=webp",
            title:"Gourment Pizza",
            places:"28 Places"
        }
    ]);
    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
        modules: [Navigation],
        className: "posterSwiper",
        navigation: true,
      };
  return (
    <div>
        <div className='lg:px-24 px-4'>
            <Swiper {...slideConfig}>
                {items.map((item) =>(
                <SwiperSlide >
                <PosterCard {...item}/>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
)
}

export default NightLifeCarousel
