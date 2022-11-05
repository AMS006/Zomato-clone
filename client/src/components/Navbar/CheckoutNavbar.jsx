import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function CheckoutNavbar() {
    const navigate = useNavigate();
    const [restaurantName,setRestaurantName] = useState("La Pino'z Pizza");
    // setRestrauntName("La Pino'z Pizza")
    const restaurant = useSelector(
      (globalState) => (globalState.restaurantReducer.selectedRestaurant)
    )
    useEffect(()=>{
      setRestaurantName(restaurant.name)
    },[restaurant])
  return (
    <div className='h-16 shadow w-full bg-white'>
      <div className='flex items-center gap-2 h-full px-2  cursor-pointer' 
            onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon
            
        />
        <h1 className='text-xl font-semibold'>{restaurantName}</h1>
      </div>
    </div>
  )
}

export default CheckoutNavbar
