import React,{useState,useEffect} from 'react'
import OrderOnlineLg from '../OrderOnline/OrderOnlineLg'
import OrderOnlineSm from '../OrderOnline/OrderOnlineSm'
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch,useSelector} from 'react-redux'
import {getMenus} from '../../redux/reducers/menus/menu.action'
function Order() {
  
  const menuId = useSelector(
    (globalState) => globalState.restaurantReducer.selectedRestaurant.menu
  )
  const dispatch = useDispatch()
  const [menuData,setMenuData] = useState() 
  useEffect(()=>{
    dispatch(getMenus(menuId)).then((data) =>{
      setMenuData(data.payload.menu);
    })
  },[menuId])
  return (
    <>
    {menuData?
      <div>
        <div className='hidden lg:block my-3'>
          <OrderOnlineLg  menuData={menuData}/>
        </div>
      <div className='lg:hidden  my-3'>
        <OrderOnlineSm  menuData={menuData}/>
      </div>
      </div>:
      <div className='flex justify-center items-center w-full h-28'>
        <CircularProgress />
      </div>}
    </>
  )
}

export default Order
