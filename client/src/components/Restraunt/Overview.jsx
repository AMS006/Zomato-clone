import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SimilarRestraunt from './SimilarRestraunt';
import AddReview from '../Review/AddReview';
import ReviewCard from '../Review/ReviewCard';
import Menu from './Menu'
import MapView from './MapView';
import CircularProgress from '@mui/material/CircularProgress';
//Redux
import { useDispatch, useSelector} from 'react-redux'
import {getReview} from '../../redux/reducers/reviews/review.action'

function Overview() {
  const { id } = useParams();
  const averageCost = 600
  const [reviews, setReviews] = useState();
  const [restaurant,setRestaurant] = useState()
  const reduxState = useSelector(
    (globalState) => globalState.restaurantReducer.selectedRestaurant
  )
  const updatedReviews = useSelector(
    (globalState) => globalState.reviewReducer.reviews.reviews
  )
  useEffect(()=>{
      setReviews(updatedReviews)
  },[updatedReviews])
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getReview(id)).then((data) =>{
      setReviews(data.payload.reviews)  
    })
  },[reduxState])

  useEffect(()=>{
    setRestaurant({...reduxState});
  },[])
  let cuisines ;
  if(restaurant){
    cuisines = restaurant.cuisine
  }
  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };
  return (
    <div>
      {restaurant ? <div className='md:flex gap-2'>
      <div className='py-3 md:w-4/6'>
        <h1 className='font-semibold text-2xl'>About this Place</h1>
        <div className='flex justify-between items-center  py-6'>
          <h2 className='text-xl text-gray-600'>Menu</h2>
          <Link to={`/restraunt/${id}/menu`} className="text-zomato-400 text-center">See all Menus<ArrowRightIcon />
          </Link>
        </div>
          <Menu />
        <div>
          <h1 className="py-3 text-xl ">Cuisines</h1>
          <div className='flex gap-4 flex-wrap items-center'>
            {cuisines.map((cuisine,index) =>(
              <div className='border cursor-pointer border-gray-500 rounded-full text-green-700 py-2 px-3' key={index}>
                <span>{cuisine}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className='text-2xl pt-4 py-3'>Average Cost</h1>
          <h4 className='text-xl text-gray-700'>₹{averageCost} for two People(approx)</h4>
          <h6 className='text-sm text-gray-400'>Exclusive of applicable taxes and charges, if any</h6>

          <div className='py-6'>
            <h4 className='text-xl text-gray-600'>Cash and Card Accepted</h4>
            <h4 className='text-xl text-gray-600'>Digital Payment Accepted</h4>
          </div>
        </div>
        <div>
          <h1 className='text-2xl py-3'>Similar Restraunt</h1>  
          <SimilarRestraunt  /> 

          <AddReview />

          {reviews?<div className='border-t-2 border-gray-200 pt-4'>
              {reviews.map((review, index) =>(
                  <ReviewCard {...review} key={index}/>
              ))}
          </div>:"Loading"}
        </div>
      </div>
      <div className='hidden w-full overflow-x-hidden md:flex shadow-lg rounded flex-col py-8 px-3 sticky bg-white z-10 top-48 h-full'>
          <MapView 
            title="McDonald's"
            phno="+91 9930470378"

            mapLocation={getLatLong(`${restaurant.mapLocation}`)}
            latAndLong={`${restaurant.mapLocation}`}
            address="High Street Phoenix, Lower Parel, Mumbai"
          />
      </div>
      </div>:
      <div className="flex justify-center items-center h-28 w-full">
        <CircularProgress />
      </div>}
    </div>
  )
}

export default Overview
