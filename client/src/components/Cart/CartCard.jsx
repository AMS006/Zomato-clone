import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {increment,decrement,deleteFromCart} from '../../redux/reducers/cart/cart.action'
import { useDispatch } from 'react-redux';
function CartCard(props) {
  const dispatch = useDispatch()
  const handleDelete = () =>{
    dispatch(deleteFromCart(props._id))
  }
  const incrementQuantity = () =>{
    dispatch(increment(props._id))
  }
  const decrementQuantity = () =>{
      if(props.quantity === 1)
        handleDelete()
      else
        dispatch(decrement(props._id))
  }
  
  return (
    <div className='flex justify-between'>
      {props.image?<div className='flex gap-2'>
          <div className='w-20 h-16 overflow-hidden'>
            <img src={props?.image} classNamew="w-full h-full object-cover overflow-hidden" alt="" />
          </div>  
          <div>
              <h3>{props.name}</h3>
              <h6 className='font-semibold'>₹{props.price}</h6>
          </div>
        </div>:
        <div>
          <h3>{props.name}</h3>
          <h6 className='font-semibold'>₹{props.price}</h6>
        </div>}
      <div className='flex gap-2 items-center'>
        
        <div className='border bg-white shadow h-8 rounded-sm flex items-center justify-center gap-2 w-16'>
          <button className='font-semibold text-lg' onClick={decrementQuantity}>-</button>
          <b>{props.quantity}</b>
          <button className='font-semibold text-lg' onClick={incrementQuantity}>+</button>
        </div>
        <div>
          <button className='text-red-800' onClick={handleDelete}><DeleteIcon /></button>
        </div>
      </div>
    </div>
  )
}

export default CartCard
