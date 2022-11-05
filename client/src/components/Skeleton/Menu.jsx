import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './style.css'
function MenuSkeleton() {
  return (
    <div className='fullHW flex flex-col gap-2'>
        <Skeleton width={140} height={180}/>
        <Skeleton width={90} height={20}/>
        <Skeleton width={70} height={15}/>
    </div>
  )
}

export default MenuSkeleton