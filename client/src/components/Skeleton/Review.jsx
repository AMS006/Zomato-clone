import React from 'react'
import Skeleton from '@mui/material/Skeleton';

// import 'react-loading-skeleton/dist/skeleton.css'
// import './style.css'
function ReviewSkeleton() {
  return (
    <div className='flex flex-col gap-3 border-b-2 py-3'>
      <div className="flex justify-between">
        <div className='flex gap-2 items-center'>
            <div>
                <Skeleton animation="wave" variant='circular' width={70} height={70}/>
            </div>
            <div>
                <Skeleton animation="wave" width={70} height={30}/>
                <div className='flex gap-1'>
                    <Skeleton animation="wave" width={70} height={20}/>
                    <Skeleton animation="wave" width={70} height={20}/>
                </div>
            </div>
        </div>
        <div>
            <Skeleton animation="wave" width={120} height={80}></Skeleton>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <div>
            <Skeleton animation="wave" width={40} height={50}/>
        </div>
        <div>
            <Skeleton animation="wave" width={60} height={20}/>
        </div>
        <div>
            <Skeleton animation="wave" width={70}  height={20}/>
        </div>
      </div>
      <div>
        <Skeleton animation="wave" width={180} heigth={20}/>
      </div>
    </div>
  )
}

export default ReviewSkeleton
