import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import {Swiper, SwiperSlide} from 'swiper/react'
// import "swiper/css";
// import "swiper/css/navigation";
import {Navigation} from 'swiper'
function SimilarRestraunt() {
    const [similarRestraunt] = useState([
        {
          _id: "sdffdsadadsfadfadsfadsf",
          isPro: true,
          isOff: false,
          name: "Master Koii's",
          restaurantReview: "4.6",
          deliveryReview:"3.3",
          cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
          averageCost: "600",
          address:"Lower Parel, Mumbai"
        },
        {
          _id: "124ksjf435245jfdfv34fg3",
          isPro: true,
          isOff: true,
          name: "Lord Of The Drinks",
          restaurantReview: "3.7",
          deliveryReview:"4.3",
          cuisine: ["Mithai","South Indian","Chinese","Street Food","Fast Food","Desserts","North Indian",
          ],
          averageCost: "450",
          address:"Palladium Mall, Lower Parel, Mumbai",
        },
        {
          _id: "124ksjf435245jfdfv34fg3",
          isPro: true,
          isOff: true,
          name: "Nathu's Sweets",
          restaurantReview: "3.7",
          deliveryReview:"2.3",
          cuisine: ["Mithai","South Indian","Chinese","Street Food","Fast Food","Desserts","North Indian",
          ],
          averageCost: "450",
          address:"Worli Mumbai"
        },
        {
          _id: "124ksjf435245jfdfv34fg3",
          isPro: true,
          isOff: true,
          name: "Nathu's Sweets",
          restaurantReview: "3.7",
          deliveryReview:"2.3",
          cuisine: ["Mithai","South Indian","Chinese","Street Food","Fast Food","Desserts","North Indian",
          ],
          averageCost: "450",
          address:"Worli Mumbai"
        },
        {
          _id: "124ksjf435245jfdfv34fg3",
          isPro: true,
          isOff: true,
          name: "Nathu's Sweets",
          restaurantReview: "3.7",
          deliveryReview:"2.3",
          cuisine: ["Mithai","South Indian","Chinese","Street Food","Fast Food","Desserts","North Indian",
          ],
          averageCost: "450",
          address:"Worli Mumbai"
        }
      ])
    const [image] = useState({
        images: [
          {
            location:
              "https://b.zmtcdn.com/data/pictures/0/20302120/8f59ee324c82fedfac7ae3b0e77b3366_o2_featured_v2.jpg",
          },
        ],
      });
      const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          clickable: true,
        },
        breakpoints: {
          540: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
        modules: [Navigation],
        className: "mySwiper",
        navigation: true,
      };
     
  return (

      <Swiper {...slideConfig}>
    <div className='grid grid-cols-3 gap-2 overflow-hidden '>
      {similarRestraunt.map((restraunt,index) =>(
        <SwiperSlide key={index}>
        <Link to={`/restraunt/${restraunt._id}/overview`}>
          <div className='p-2 rounded-lg overflow-hidden duration-200 border border-white hover:border-gray-200 cursor-pointer  hover:shadow' key={index}>
              <div className=''>
                  <img src={image.images[0].location} className="h-full  w-full rounded overflow-hidden" alt={restraunt.name} />
              </div>
              <div className='pt-3'>
                <h2 className='font-semibold text-lg'>{restraunt.name}</h2>
                <div className='flex gap-1 items-center justify-between'>
                  <div className='flex gap-1 items-center'>
                    <div className='bg-green-700 text-white rounded-lg px-1 text-sm font-semibold flex items-center justify-center' style={{paddingTop:"2px", paddingBottom:"2px"}}>
                     {restraunt.restaurantReview}<StarIcon fontSize='small' className='pl-1'/>
                    </div>
                     <span >Dining</span>
                  </div>
                  <div>
                    <span className='text-gray-400'> | </span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div className='bg-green-700 text-white rounded-lg px-1 text-sm font-semibold flex items-center justify-center' style={{paddingTop:"2px", paddingBottom:"2px"}}>
                     {restraunt.deliveryReview}<StarIcon fontSize='small' className='pl-1'/>
                    </div>
                     <span>Delivery</span>
                  </div>
                </div>
                <p className='truncate text-ellipsis pt-2 text-gray-500 text-sm'>{restraunt.cuisine.join(", ")}</p>
                <p className='truncate text-ellipsis  text-gray-500 text-sm'>{restraunt.address}</p>
              </div>
          </div>
        </Link>
        </SwiperSlide>
      ))}
    </div>
      </Swiper>
  )
}

export default SimilarRestraunt
