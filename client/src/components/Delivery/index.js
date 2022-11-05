import React,{useState,useEffect} from 'react'
import DeliveryCarousel from './DeliveryCarousel'
import RestrauntCard from '../RestrauntCard';
import FilterTab from "../../components/FilterTab";
import './style.css'
import {useSelector} from 'react-redux'
function Delivery() {

  const [restaurantList,setRestaurant] = useState([]);
  const reduxState = useSelector(
    (globalState) => globalState.restaurantReducer.restaurants
  );
  useEffect(() => {
    reduxState && setRestaurant(reduxState);
  }, [reduxState]);
  return (
    <div className='mb-20'>
      <div className='bg-gray-100 py-10'>
        <h1 className='py-4 lg:text-3xl font-semibold lg:px-20 md:text-xl px-5 text-lg'>Inspiration for your first order</h1>
        <DeliveryCarousel />
      </div>
      <div className='sticky bg-white lg:py-2 top-0 z-20'>
        <FilterTab />
      </div>
      <h2 className='px-4 lg:px-20 py-5 lg:text-3xl text-xl'>Delivery Restaurants in your area</h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-24 px-4'>
            {restaurantList.map((restraunt,index)=>(
              <RestrauntCard {...restraunt} key={index} />
            ))}
          </div>
    </div>
  )
}

export default Delivery
