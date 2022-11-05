import React, { useState, useEffect } from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ReviewModal from './ReviewModal';
import RatingCard from './RatingCard';
import { useSelector } from 'react-redux';

function AddReview() {

    const [reviewType, setReview] = useState()
    const getReviewType = (type) =>{
        setReview(type);
    }
    const [open, setOpen] = useState(false);
    const user = useSelector((globalState) => globalState.userReducer.user)
    const openModal = () =>{
      if(user.fullName)
        setOpen(true);
      else
        alert("Plzz login to add a review")
    }
    
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    // console.log(value);
    // console.log(reviewType);
  return (
    <div className='py-2'>
      <ReviewModal open={open} setOpen={setOpen} type={reviewType} value={value} setValue={setValue}/>
        <h4 className='py-2 text-xl font-medium text-gray-600'>Rate Your Experience For</h4>
        <div className='flex gap-6 text-lg'>
            <div className='cursor-pointer'>
                <input type={"radio"} name="review" onChange={(event) => getReviewType(event.target.id)}  id="delivery" className='accent-zomato-400 mr-2 cursor-pointer' />
                <label htmlFor="delivery" className='cursor-pointer'>Delivery</label>
            </div>
            <div className='cursor-pointer'>
                <input type="radio" name="review" onChange={(event) => getReviewType(event.target.id)} id="dining" className='accent-zomato-400 mr-2 cursor-pointer'/>
                <label htmlFor="dining" className='cursor-pointer'>Dining</label>
            </div>
        </div>
        <RatingCard value={value} setValue={setValue}/>
      <button className='text-zomato-300 font-lg' onClick={() => openModal()}>Write a Review</button>
    </div>
  )
}

export default AddReview;