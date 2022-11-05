import React from 'react'
import { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from 'swiper'
import PosterCard from '../PosterCard';

function DiningCarouse() {
    const [items,setItem] = useState([
        {
            image:"https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708807.jpg",
            title:"Newly Opened",
            places:"15 Places"
        },
        {
            image:"https://b.zmtcdn.com/data/collections/28d243a9d5e5874fefa0f058f28555dd_1615460077.jpg",
            title:"Best of Mumbai",
            places:"136 Places"
        },
        {
            image:"https://b.zmtcdn.com/data/collections/174480faee1a4a2c0f0fdd82cac5d8a5_1647240902.jpg",
            title:"Trending This Weak",
            places:"30 Places"
        },
        {
            image:"https://b.zmtcdn.com/data/collections/f6e7f7d903d6499e1420d755ddc0ab11_1647238882.jpg",
            title:"Gourment Pizza",
            places:"28 Places"
        },
        {
            image:"https://b.zmtcdn.com/data/collections/6ef572662529fbe547628e6471d49bc0_1647242535.jpg",
            title:"Microbrewiers",
            places:"13 Places"
        },
        {
            image:"https://b.zmtcdn.com/data/collections/4c645d68d0ad4c624abab81374c8997c_1582106595.jpg",
            title:"Where's The Party",
            places:"36 Places"
        },
        {
            image:"https://b.zmtcdn.com/data/collections/9d8fe0107063fddcd78818af5fbe2146_1647245872.jpg",
            title:"Most Popular Restraunt",
            places:"33 Places"
        },
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
    <div className='lg:px-24 px-4'>
        <Swiper {...slideConfig}>
        {items.map((item) =>(
            <SwiperSlide >
                <PosterCard {...item}/>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default DiningCarouse