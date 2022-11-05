import React from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShareIcon from '@mui/icons-material/Share';
import DirectionsIcon from '@mui/icons-material/Directions';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
function ButtonsTab() {
    const buttons = [
        {
            name:"Add Review",
            icon:<StarOutlineIcon fontSize='small' />
        },
        {
            name:"Direction",
            icon:<DirectionsIcon fontSize='small' sx={{color:'red'}}/>
        },
        {
            name:"BookMark",
            icon:<BookmarkAddIcon fontSize='small' sx={{color:'red'}}/>
        },
        {
            name:"Share",
            icon:<ShareIcon fontSize='small' sx={{color:'red'}}/>
        }
    ]
  return (
    <div className='hidden lg:flex gap-3 items-center py-3'>
      {buttons.map((button, index) => (
        <div className='flex items-center ' key={index}>
            <button className={`flex items-center gap-1 w-full border px-3 py-2 rounded-lg  h-full ${button.name==="Add Review"?'bg-zomato-400 text-white border-zomato-500 ':'border-gray-500'}`}>
                {button.icon}
                {button.name}
            </button>
        </div>
    ))}
    </div>
  )
}

export default ButtonsTab
