import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function RestrauntInfo(props) {
    const cusine = props.restraunt.cuisine
    let smCuisine = "";
    for(let i = 0;i<2;i++){
          smCuisine +=  (cusine[i] + ", ")
        
    }
    if(cusine.length >= 3)
         smCuisine += cusine[2]
  return (
    <div className="sticky top-0 z-10 bg-white py-2 px-1" >
        <div className='flex justify-between '>
            <div>
                <h1 className='text-2xl font-bold'>{props.restraunt.name}</h1>
                <div className='block lg:hidden text-sm'>
                    <h4 className='text-gray-700'>{smCuisine}</h4>
                    <h5 className='text-gray-500'>{props.restraunt.address}</h5>
                    <h5 className='text-gray-500'><span className="text-orange-500"> Open Now - </span> {props.restraunt.restrauntTimings} (Today)</h5>
                </div>
            </div>
            <div className='hidden lg:flex gap-2'>
                <div className='flex items-center gap-1'>
                    <div className='bg-green-700 font-bold px-1 flex items-center text-white rounded-lg'>
                        {props.restraunt.deliveryRating}
                        <StarIcon fontSize="small"></StarIcon>
                    </div>
                    <div>
                        <h3 className='text-sm'>1,324</h3>
                        <p className='text-sm text-gray-400 border-dashed border-b border-gray-400'>Delivery Reviews</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='bg-green-700 font-bold px-1 flex items-center text-white rounded-lg'>
                        {props.restraunt.diningRating}
                        <StarIcon fontSize="small"></StarIcon>
                    </div>
                    <div>
                        <h3 className='text-sm'>324</h3>
                        <p className='text-sm text-gray-400 border-dashed border-b border-gray-400'>Dining Reviews</p>
                    </div>
                </div>
            </div>
            <div className='flex lg:hidden flex-col h-16 border items-center overflow-hidden rounded-lg'>
                <div className='text-white bg-green-700 w-full text-center'>
                    <StarIcon fontSize='small'/>
                </div>
                <div className='flex flex-col justify-center px-2 pb-1 items-center text-xs'>
                    <p>12</p>
                    <h4 className=''>Reviews</h4>
                </div>
            </div>
        </div>
        <div className='hidden lg:block '>
            <h4 className='text-gray-700'>{props.restraunt.cuisine.join(", ")}</h4>
            <h5 className='text-gray-500'>{props.restraunt.address}</h5>
            <h5 className='text-gray-500'><span className="text-orange-500"> Open Now - </span> {props.restraunt.restrauntTimings} (Today)</h5>
        </div>
    </div>
  )
}

export default RestrauntInfo