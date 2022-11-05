import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import DiningIcon from '@mui/icons-material/Dining';
import FoodTabSkeleton from "../Skeleton/FoodTab";
import { useSelector } from 'react-redux';
function FoodTabLg(){
  const [allTypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "Delivery",
      activeColor: "yellow",
    },
    {
      id: "dining",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      activeColor: "blue",
      name: "Dining Out",
    },
    {
      id: `night`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      activeColor: "purple",
      name: "Night life",
    },
  ]);
  const restaurant = useSelector(
    (globalState) => globalState.restaurantReducer.restaurants
  )
  const { type } = useParams();
  return (
  <>
    <div className=' hidden lg:flex gap-16 px-20 py-4  bg-white '>
      {allTypes.map((item) =>(
        <Link to={`/${item.id}`} key={item.id}>
          <div className={`${item.id===type?'':''} pb-3 transition duration-700 ease-out flex items-center gap-2`}>
            <div className=''style={{height:'52px', width:'52px'}} >
              <img src={item.id === type ? item.imageActive:item.imageDefault} alt={item.id} className={`${item.id === type ? 'bg-blue-200':''} w-full h-full rounded-3xl  p-2 `}></img>
            </div>
            <h1 className={`${type===item.id ? 'text-zomato-400':'text-gray-400'}  text-2xl`}>{item.name}</h1>

          </div>
          <hr className={`${item.id===type?'hrTransition':'border-0'} `}  />

        </Link>
      ))}
    </div>
  </>
  )
}
function FoodTabMobile(){
  const [allTypes] = useState([
    {
      id: "delivery",
      icon: <DeliveryDiningIcon fontSize='large'/>,
      name: "Delivery",
    },
    {
      id: "dining",
      icon: <DiningIcon fontSize='large'/>,
      name: "Dining",
    },
    {
      id: "night",
      icon: <NightlifeIcon fontSize='large'/>,
      name: "Night Life",
    },
  ]);
  const {type} = useParams()
 
  return (
    <div className='flex lg:hidden justify-around z-20 fixed bottom-0 bg-white py-2 foodTab' style={{width:'100vw'}} >
       {allTypes.map((item) =>(
         <Link to={`/${item.id}`} key={item.id} className='text-center w-16'>
          <hr className={`${item.id===type?'hrTransition':'border-0'} mb-1`}  />
          <div  classNaame='flex flex-col gap-1  items-center'>
            <span className={`${type===item.id?'text-zomato-400':''} text-sm`}>{item.icon}</span>
            <h4 className='text-sm'>{item.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  )
}
function FoodTab() {
  return (
    <div className='sticky top-0 z-10 '>
        <FoodTabLg />
      <FoodTabMobile />
    </div>
  )
}

export default FoodTab
