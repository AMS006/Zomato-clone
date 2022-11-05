import React from 'react'
import { useLocation,Link, useParams } from 'react-router-dom'

function Tabs(props) {
    const {pathname} = useLocation();
    // console.log(path)
    const {id} = useParams();
    const tabs = [
        {
            route:"overview",
            name:"Overview",
            isActive: pathname.includes("overview")
        },
        {
            route:"order",
            name:"Order Online",
            isActive: pathname.includes("order")
        },
        {
            route:"reviews",
            name:"Reviews",
            isActive: pathname.includes("review")
        },
        {
            route:"photos",
            name:"Photos",
            isActive: pathname.includes("photo")
        },
        {
            route:"menu",
            name:"Menus",
            isActive: pathname.includes("menu")
        },
    ]
  return (
    <div className='sticky top-20 lg:top-32  z-10 overflow-auto removeScroll bg-white'>
    <div className='flex x gap-3 relative  md:border-b-2 lg:border-b-2  py-4'>
      {tabs.map((tab,index) => (
        <Link to={`/restraunt/${id}/${tab.route}`} key={index}>
            <div className='w-32 text-center'>
                <h1 className='text-xl text-gray-600'>{tab.name}</h1>
            </div>
            {tab.isActive?<div className='border-b-2 w-32 hrTransition border-zomato-500 absolute bottom-0 ' style={{height:'1px'}}></div>:''}
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Tabs
