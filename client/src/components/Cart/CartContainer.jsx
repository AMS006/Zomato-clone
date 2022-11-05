import React,{useState} from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CartCard from './CartCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getCart} from '../../redux/reducers/cart/cart.action'
function CartData({setIsOpen,open,cart}){
  const toggleOpen = () =>{
    setIsOpen((prev) => !prev)
  }
  const navigate = useNavigate()
  const checkoutPage = () => navigate('/checkout/orders')
  return(
    <div className='flex justify-between items-center'>
      <div>
        <div className='flex items-center gap-2'>
          <p>{cart.length} ITEM</p>
          <i onClick={toggleOpen} className='cursor-pointer'>
          { !open ?<KeyboardArrowUpIcon />:
            <KeyboardArrowDownIcon />}
          </i>
        </div>
          <h4 className='font-semibold'>₹ {cart.reduce((previous,current) => previous+current.totalPrice ,0)}</h4>
      </div>
      <div>
        <button className='border font-medium shadow-md py-1 pl-3 pr-1 rounded bg-white' onClick={checkoutPage}>Checkout<ArrowRightIcon fontSize='medium'/ ></button>
      </div>
    </div>
  )
}
function CartContainer() {
 
  const [cart, setCart] = useState();
  const [isOpen,setIsOpen] = useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCart())
    
  },[localStorage.zomatoCartItems])
  const cartData = useSelector((globalState) => globalState.cartReducer.cart)
  useEffect(()=>{
    setCart(cartData)
  },[cartData])
  // console.log(cart, cart.length)
  return (
  <> 
    {cart && cart.length>0 ? 
    <div className='py-2 sticky bottom-0  bg-zomato-100 text-zomato-600 z-30'>
      <div className='px-3 lg:px-24'>
        {isOpen?
        <div>
          <h3 className='font-semibold text-lg'>Your Orders</h3>
          <div className='flex flex-col gap-3 py-3 text-sm'>
            {cart.map((item,index) =>(
              <CartCard {...item} key={index}/>
            ))}
          </div>
        </div>:''}
        <CartData setIsOpen={setIsOpen} open={isOpen} cart ={cart}/>
      </div>
    </div>:''}
  </> 
  )
}

export default CartContainer