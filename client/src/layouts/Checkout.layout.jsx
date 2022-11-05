import React from 'react'
import CheckoutNavbar from '../components/Navbar/CheckoutNavbar';

const CheckoutLayout = (Components) => ({...props}) => {
  return (
    <div>
        <CheckoutNavbar />
        <Components {...props} />
    </div>
  )
}

export default CheckoutLayout;
