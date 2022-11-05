import React from 'react'
// import Skeleton from '@mui/material/Skeleton';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './style.css'
function ImageGridSkeleton() {
    
  return (
    <div className='hidden md:grid lg:grid   grid-cols-5 80 md:h-96  gap-2'>
      <div className='col-span-3 flex items-center justify-center fullHW  h-full w-full' >
        <Skeleton  className="w-full h-full" />
      </div>
      <div className='h-full flex gap-2 flex-col fullHW'>
        <div className='h-1/2'>
            <Skeleton />
        </div>
        <div className='h-1/2'>
            <Skeleton />
        </div>
      </div>
      <div className='h-full flex gap-2 flex-col fullHW'>
        <div className='h-1/2'>
            <Skeleton />
        </div>
        <div className='h-1/2'>
            <Skeleton />
        </div>
      </div>
    </div>
  )
}

export default ImageGridSkeleton
