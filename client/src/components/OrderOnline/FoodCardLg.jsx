import React,{useEffect,useState} from 'react'
import Rating from '@mui/material/Rating';
import {useDispatch} from 'react-redux'
import {getFood} from '../../redux/reducers/foods/food.action'
import {getImages} from '../../redux/reducers/images/images.action'
import {addToCart} from '../../redux/reducers/cart/cart.action'
import { CircularProgress } from '@mui/material';
import FoodCartSkeleton from '../Skeleton/FoodCart';
function FoodCardLg({id}) {
  const dispatch = useDispatch();
  const [foodData,setFoodData] = useState();
  useEffect(()=>{
      dispatch(getFood(id)).then((data)=>{
      setFoodData({...data.payload.food})
      dispatch((getImages(data.payload.food.photos))).then((data)=>{
        setFoodData((prev) => ({...prev, image:data.payload[0].src}))
      })
    })
  },[])
  const handleAddToCart = () =>{
    dispatch(addToCart({...foodData, quantity:1, totalPrice:foodData.price}))
  }
  return (
    <>
    {foodData&&foodData.image?<div className='flex gap-3 items-start'>
      <div className='h-20 w-28 lg:h-28 lg:w-36 '>
        <img src={foodData.image} className='h-full w-full rounded-md overflow-hidden' alt={foodData.name} />
      </div>
      <div className='flex flex-col gap-1 w-full'>
      <div className='flex justify-between'>
          <h3 className='font-semibold'>{foodData.name}</h3>
          <div className=' bg-zomato-100 px-4 font-semibold text-zomato-600 h-10 rounded cursor-pointer' >
            <button className='h-full w-full' onClick={handleAddToCart}>Add<sup>+</sup></button>
          </div>
        </div>
        <div>
        <Rating name="half-rating-read" defaultValue={Number(foodData.rating)} size='small' precision={0.5} readOnly />
        </div>
        <p className='text-gray-500'>₹{foodData.price}</p>
        <p className='text-gray-600 hidden lg:block' style={{width:'98%'}}>
          {foodData.description}
          </p>
      </div>
    </div>:<FoodCartSkeleton />}
    </>
  )
}

export default FoodCardLg;
