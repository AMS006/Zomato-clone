
import React, { useState,useEffect } from 'react'
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import RestaurantCardSkeleton from './Skeleton/RestaurantCard';
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getImages} from '../redux/reducers/images/images.action'
function RestrauntCard(props) {
  const [image,setImage] = useState();
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getImages(props.RestrauntImages)).then((data) =>{
      const images = data.payload
      setImage((prev) =>({...prev, ...images}))
    })
  },[]);
  return (
    <>
    {image?<Link to={`/restraunt/${props._id}/overview`}>
      <div className='p-2 flex flex-col gap-2 transition  duration-500 rounded-xl hover:shadow-lg border border-white hover:border-gray-200'>
        <div className='relative' style={{ height: '256px' }}>
          <img src={image[0].src} className='w-full h-full' style={{ borderRadius: '1rem' }} alt={props.name} />
          <div className='absolute bottom-4 flex flex-col gap-2 text-sm'>
            {props.isPro ? <p className='bg-pink-700 text-white px-1 font-sans'>Pro extra 25% OFF</p> : ""}
            {props.isOff ? <p className='bg-blue-500 text-white px-1 font-sans'>50% OFF upto 100</p> : ""}
          </div>
        </div>
        <div className='flex justify-between'>
          <h2 className='text-gray-600 font-semibold text-lg'>{props.name}</h2>
          <div className='bg-green-600 flex items-center gap-1 text-white  rounded-lg font-semibold text-sm' style={{ padding: '1px 4px' }}>
            <span className=''>{props.deliveryRating}</span>
            < GradeRoundedIcon fontSize='small' />
          </div>
        </div>
        <div className='flex items-center justify-between text-gray-500'>
          <p className='truncate text-ellipsis overflow-hidden w-2/3'>{props.cuisine.join(",")}</p>
          <p className='text-sm '>₹150 for one</p>
        </div>
      </div>
    </Link>:<RestaurantCardSkeleton />}
    </>
  )
}

export default RestrauntCard
