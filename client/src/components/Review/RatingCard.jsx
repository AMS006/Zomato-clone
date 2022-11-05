import React,{useState} from 'react'
import Rating from '@mui/material/Rating';
function RatingCard(props) {
    const [hover, setHover] = useState(-1);
    
  return (
    <div className='py-2'>
        <Rating
            name="Review"
            value={props.value}
            precision={0.5}
            onChange={(event, newValue) => {
            props.setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
            setHover(newHover);
            }}
      />
        </div>
  )
}

export default RatingCard
