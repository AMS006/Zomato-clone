import React,{useState,useEffect} from 'react'
import MenuCard from './MenuCard'
//Redux
import {useDispatch,useSelector} from 'react-redux'
import {getImages} from '../../redux/reducers/images/images.action'
import MenuSkeleton from '../Skeleton/Menu';

function Menu() {
  const [menuImages, setMenuImages] = useState([]);
  const [images,setImages] = useState()
  const dispatch = useDispatch()
  const menuImagesId = useSelector(
    (globalState) => globalState.restaurantReducer.selectedRestaurant.menuImages
  );
  useEffect(() =>{
   dispatch(getImages(menuImagesId)).then((data) =>{
     setImages(data.payload)
   })
  },[])
  if(images){
   for(let i in images)
     menuImages[i] = images[i].src
  }
  return (
    <div className='py-4'>
      {images?<MenuCard menuImages={menuImages}/>:<MenuSkeleton />}
    </div>
  )
}

export default Menu