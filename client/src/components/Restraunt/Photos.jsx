
import React, {useState,useEffect} from 'react'
import ImageViewer from 'react-simple-image-viewer'
import CircularProgress from '@mui/material/CircularProgress';
//Redux
import {useSelector,useDispatch} from 'react-redux'
import {getImages} from '../../redux/reducers/images/images.action'

function Photos() {
  let [images, setImages] = useState([])
  const closeViewer = () => setIsPhotosOpen(false);
  const openViewer = () => setIsPhotosOpen(true);
  const [isPhotosOpen, setIsPhotosOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const openImage = (index) =>{
    setCurrentImage(index)
    openViewer();
  }
  const reduxState = useSelector(
      (globalState) => globalState.restaurantReducer.selectedRestaurant
  );
  const restaurantImagesId = reduxState.RestrauntImages
  const dispatch = useDispatch();
  const [restaurantImages,setRestaurantImages] = useState()
  useEffect(()=>{
    dispatch(getImages(restaurantImagesId)).then((data) =>{
      setRestaurantImages(data.payload)
    })
  },[])

  if(restaurantImages){
    for(let i in restaurantImages)
      images[i] = restaurantImages[i].src
   }
  return (
    <>
    {isPhotosOpen && <ImageViewer
      src= { images }
      currentIndex={ currentImage }
      disableScroll={ true }
      closeOnClickOutside={ true }
      onClose={ closeViewer }
    />}
    {images.length>0 ? <div className=' flex items-center justify-center md:justify-start gap-3 flex-wrap py-4 '>
      {images.map((image, index) =>(
          <div className='h-40 md:w-40 w-36   cursor-pointer' key={index} onClick={() => openImage(index)}>
            <img src={image} className="h-full w-full rounded-lg overflow-hidden object-cover" alt="Resstraunt_images" />
          </div>
      ))} 
     </div>:
     <div className='flex justify-center w-full h-28 items-center'>
        <CircularProgress />
      </div>}
    </>
  )
}

export default Photos
