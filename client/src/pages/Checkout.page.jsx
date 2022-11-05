import React,{useState} from 'react'
import CartCard from '../components/Cart/CartCard';
import CheckoutLayout from '../layouts/Checkout.layout';
import SecurityIcon from '@mui/icons-material/Security';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Checkout() {
  const [cart, setCart] = useState();
  const user ={
    name:"Anas",
    email:"anassain145@gmail.com"
  }
  const cartData = useSelector((globalState) => globalState.cartReducer.cart);
  let total = 0, deliveryCharge = 40, tax =  0, grandTotal = 0;
  useEffect(()=>{
    setCart(cartData)
  },[cartData])

    for(let e in cart){
      total += cart[e].totalPrice
      tax = Math.floor(tax + (cart[e].totalPrice*0.05))
    }
  if(total > 500)
    deliveryCharge = 0
  
  grandTotal = total + deliveryCharge + tax
  // {total !==0 && console.log(total)}
  
  const payNow = () =>{
    let options = {
      key: "rzp_test_6d5dWmnHFnEP0F",
      amount : grandTotal *100,
      currency: "INR",
      name: "Zomato Master",
      description: "Fast Delivery Service",
      handler: (data) => {
        alert("Payment Successful");
        console.log(data);
      },
      prefill: {
        name: user.name,
        email: user.email,
      },
      theme: {
        color: "#e23744",
      },
    };
    let razorpay = new window.Razorpay(options);
    razorpay.open();
  }
  return (
    <div className='flex justify-center overflow-hidden py-2 h-full w-full' >
      {cart && cart.length?<div className=' container mx-auto   px-3 md:flex  gap-4' >
        <div className='md:w-2/3 border shadow px-2 my-2'>
          <h1 className=' text-lg font-semibold  py-3 border-b-2'>Your Orders</h1>
          <div className='flex flex-col gap-3 py-3 '>
            {cart.map((item,index) =>(
              <CartCard {...item} key={index}/>
            ))}
          </div>
        </div>
        <div className='py-2 md:w-1/3 border shadow-md px-2 my-2 h-60 sticky top-0 z-10 bg-white'>
          <h2 className='text-lg font-semibold border-b-2 py-2'>Bill Summary</h2>
          <div className='flex justify-between items-center'>
            <p >Item total</p>
            <p className='font-medium'>₹{total}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p >Delivery charge</p>
            <p className='font-medium'>{ deliveryCharge!==0 ? `₹${deliveryCharge}`:"Free Delivery"}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p >Total tax</p>
            <p className='font-medium'>₹ {tax}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='font-semibold py-1'>Grand Total</p>
            <p className='font-medium'>₹ {grandTotal}</p>
          </div>
          <div className='py-3 flex items-center justify-center'>
            <button className='border px-3 py-2 rounded-full font-semibold bg-zomato-400 text-white' onClick={payNow}> <SecurityIcon /> Pay Securely</button>
          </div>
        </div>
      </div>:
      <div className='flex items-center h-full w-full justify-center text-gray'>
        <h1>Cart is Empty</h1>
      </div>}
    </div>
  )
}

export default CheckoutLayout(Checkout);
