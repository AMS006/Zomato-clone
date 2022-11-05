import React from 'react'
import FoodCardLg from './FoodCardLg'
function FoodItemsLg({menus,menuData}) {
  return (
    <div>
      {menuData.map((menu,index) =>(
        <div key={index}>
        <h1 className='text-xl font-semibold py-2' id={menu.name}>{menu.name}</h1>
        <div className='flex gap-4  flex-col'>
            {menu.items.map((item) =>(
                <FoodCardLg id={item}  key={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FoodItemsLg
