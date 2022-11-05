import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function PosterCard(props) {
  return (
    <div>
        <div className='relative'>
            <div className='h-80'>
                <img src={props.image} className='h-full w-full rounded-lg' alt={props.title} />
            </div>
            <div  className="w-full h-full absolute inset-0 rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}></div>
            <div className='absolute flex flex-col gap-1 px-3 bottom-2 text-white '>
                <h3>{props.title}</h3>
                <div className='flex gap-0 items-center'>
                <h6>{props.places}</h6>
                <span className='' style={{paddingTop:'1px'}}><ArrowRightIcon /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PosterCard