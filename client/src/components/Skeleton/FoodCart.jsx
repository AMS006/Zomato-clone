import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './style.css'
function FoodCartSkeleton() {
  return (
    <div>
      <div className='flex gap-2 fullHW'>
        <div className='hidden lg:block'>
            <Skeleton width={150} height={150}/>
        </div>
        <div className='block lg:hidden'>
            <Skeleton width={100} height={100}/>
        </div>
        <div className='flex flex-col gap-3'>
            <div>
                <Skeleton width={130} height={20}/>
            </div>
            <div>
                <Skeleton width={80} height={20}/>
            </div>
            <div>
                <Skeleton width={60} height={20}/>
            </div>
            <div className='hidden lg:block'>
                <Skeleton width={200} height={15}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FoodCartSkeleton
