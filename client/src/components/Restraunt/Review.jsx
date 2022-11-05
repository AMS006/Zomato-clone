import React,{useState} from 'react'
import AddReview from '../Review/AddReview';
import ReviewCard from '../Review/ReviewCard'
import { getReview} from '../../redux/reducers/reviews/review.action'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewSkeleton from '../Skeleton/Review';
function Review() {
  const [reviews, setReviews] = useState();
  const dispatch = useDispatch();
  const restaurant = useSelector(
    (globalState) => globalState.restaurantReducer.selectedRestaurant
  )
  const updatedReviews = useSelector(
    (globalState) => globalState.reviewReducer.reviews.reviews
  )
  console.log(updatedReviews);
  useEffect(()=>{
    if(updatedReviews)
      setReviews(updatedReviews)
  },[updatedReviews])
  const {id} = useParams()
  useEffect(()=>{
    dispatch(getReview(id)).then((data) =>{
      console.log(data.payload.reviews)
      setReviews(data.payload.reviews)
    })
  },[restaurant])
  return (
    <div className='md:grid grid-cols-3 gap-6 py-4'>
      <div className='md:hidden shadow-lg px-4 h-48'>
      <AddReview />
      </div>

      {reviews?<div className=' col-span-2 border-gray-200 pt-4'>
              {reviews.map((review, index) =>(
                  <ReviewCard {...review} key={index}/>
              ))}
      </div>:<ReviewSkeleton />}
      <div className='hidden md:block shadow-lg px-4 h-48'>
      <AddReview />
      </div>
    </div>
  )
}

export default Review
