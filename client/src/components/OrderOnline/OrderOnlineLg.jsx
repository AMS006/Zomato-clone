import React from 'react'
import FoodItemsLg from './FoodItemsLg';

function OrderOnlineLg({menus,menuData}){
    const handleClick = (e) =>{
        const ele = e.target.parentNode.parentNode.parentNode
        const childrens = ele.childNodes
        for(let i = 0; i<childrens.length;i++)
            childrens[i].classList.remove('active')
        
        const addStyleElement = e.target.parentNode.parentNode
        addStyleElement.classList.add('active')
        
    }

  return (
    <div className='flex gap-3  '>
      <div className='w-1/4  h-80 flex flex-col gap-4 py-4 removeScroll sticky z-20 bg-white overflow-y-auto' style={{top:'12.1rem'}}>
        {menuData.map((menu,index) => (
            <div className={`px-2 py-2 ${index === 0?'active':''}`} key={index} >
                <a href={`#${menu.name}`}>
                    <h4 className='font-medium' onClick={handleClick}>{menu.name} ({menu.items.length})</h4>
                </a>
            </div>
        ))}
      </div>
      <div className='w-3/4   pt-4' >
        <FoodItemsLg menus={menus} menuData={menuData}/>
      </div>
    </div>
  )
}

export default OrderOnlineLg;
