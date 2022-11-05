import { Skeleton } from '@mui/material'
import React from 'react'

import './style.css'
function InfoTabSkeleton() {

    return (
        <div className='flex  justify-between items-start'>
            <div >
                <div>
                    <Skeleton animation="wave" width={150} height={50} />
                </div>
                <div>
                    <Skeleton animation="wave" width={350} />
                </div>
                <div>
                    <Skeleton animation="wave" width={200} />
                </div>
                <div>
                    <Skeleton animation="wave" width={400} />
                </div>
            </div>
            <div className='gap-2 hidden lg:flex'>
                <Skeleton animation="wave" width={110} height={55} />
                <Skeleton animation="wave" width={110} height={55} />
            </div>
            <div className='lg:hidden flex'>
                <Skeleton animation="wave" width={70} height={100} />
            </div>
        </div>
    )
}

export default InfoTabSkeleton
