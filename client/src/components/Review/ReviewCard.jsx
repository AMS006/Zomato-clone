import React, { useEffect,useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {useDispatch} from 'react-redux'
import {getUser} from '../../redux/reducers/user/user.action'
import ReviewSkeleton from '../Skeleton/Review';
dayjs.extend(relativeTime);
function ReviewCard(props) {
    const dispatch = useDispatch()
    const [user,setUser] = useState()
    useEffect(()=>{
        dispatch(getUser(props.user)).then((data) =>{
            setUser(data.payload.user)
        })
    },[props])
  return (
    <>
    {user ?<div className='flex flex-col gap-4 py-3 border-b-2'>
        <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <div className='h-10 w-10'>
                    <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png" className='h-full w-full' alt="" />
                </div>
                <div>
                    <h3>{user.fullName}</h3>
                    <div className='text-sm text-gray-400'>
                        <span>5 reviews  &#8226; 10 followers</span>
                    </div>
                </div>
            </div>
            <div>
                <button className='border border-zomato-300 text-zomato-300 py-2 px-3 font-lg rounded-lg '>Follow</button>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='text-white bg-green-700  rounded-lg flex items-center text-sm font-semibold' style={{padding:'1px 3px'}}>
                {props.rating} <StarIcon fontSize="small"/>
            </div>
            <p className='px-2 text-sm text-gray-600'>{`${props.isRestrauntReview ? 'DINING':'DELIVERY'}`}</p>
            <p className='text-sm px-2 text-gray-500'>{dayjs(props.createdAt).fromNow()}</p>
        </div>
        {/* <h3 className='font-semibold'>{props.title}</h3> */}
        <p>
            {props.reviewDescription}
        </p>
    </div>: <ReviewSkeleton />}
    </>
  )
}

export default ReviewCard