import Skeleton from '@mui/material/Skeleton';

import React from 'react'

function RestaurantCardSkeleton() {
  return (
    <div style={{width:'320px'}}>
        <div style={{height:'240px'}}>
            <Skeleton height={290} width={320} animation="wave"/>
        </div>
        <div className='flex justify-between ' >
            <Skeleton height={50} width={150} animation="wave"/>
            <Skeleton height={50} width={50} animation="wave"/>
        </div>
        <div className='flex justify-between ' >
            <Skeleton height={40} width={200} animation="wave"/>
            <Skeleton height={40} width={80} animation="wave"/>
        </div>
    </div>
  )
}

export default RestaurantCardSkeleton