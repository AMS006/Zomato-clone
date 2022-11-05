import React, { useState,useEffect } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useParams, Link } from "react-router-dom";
import ImageViewer from 'react-simple-image-viewer'
import ImageGridSkeleton from "../Skeleton/ImageGrid";
//Redux
import {useDispatch,useSelector} from 'react-redux'
import {getImages} from '../../redux/reducers/images/images.action'

function ImageGrid() {
  const {id} = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  const restaurantImagesId = useSelector(
    (globalState) => globalState.restaurantReducer.selectedRestaurant.RestrauntImages
  );
  const dispatch = useDispatch()
  const [restaurantImages, setRestaurantImages] = useState();
  useEffect(() =>{
    dispatch(getImages(restaurantImagesId)).then((data) =>{
      setRestaurantImages({...data.payload})
    })
  },[])
  const openImage = (index) =>{
    setCurrentImage(index)
    openViewer();
  }
  let images = [];
  for(let e in restaurantImages){
   images[e] =restaurantImages[e].src
  }
  return (
    <div>
     {restaurantImages ? <div className="hidden md:grid lg:grid   grid-cols-5 80 lg:h-96  gap-2">
      {isMenuOpen && <ImageViewer
      src= { images }
      currentIndex={ currentImage }
      disableScroll={ true }
      closeOnClickOutside={ true }
      onClose={ closeViewer }
    />}
      <div className="col-span-3 overflow-hidden  cursor-pointer" onClick={() =>openImage(0)}>
          <img
            src={restaurantImages[0].src}
            className="h-full w-full object-cover duration-700 hover:scale-105"
            alt="4545"
            
          />
        </div>
        <div className="h-full hidden md:grid lg:grid  grid-rows-2 overflow-hidden gap-2">

        <div className="overflow-hidden cursor-pointer" onClick={() =>openImage(1)}>
            <img
              src={restaurantImages[1].src}
              className="h-full w-full object-cover duration-700 hover:scale-105"
              alt="4545"
            />
          </div>
          <div className="overflow-hidden cursor-pointer" onClick={() =>openImage(2)}>
            <img
              src={restaurantImages[2].src}
              className="h-full w-full object-cover duration-700 hover:scale-105"
              alt="4545"
            />
          </div>
        </div>
        <div className="h-full hidden md:grid lg:grid grid-rows-2 overflow-hidden gap-2">
          <Link to={`/restraunt/${id}/photos`} hrefLang="#photos" onClick={window.scroll(0,300)}>
          <div className="overflow-hidden h-full  relative cursor-pointer">
            <img
              src={restaurantImages[3].src}
              className="h-full brightness-50 w-full object-cover"
              alt="4545"
            />
            <h5 className="absolute top-1/2 flex justify-center w-full z-10 text-white">
              View Gallery
            </h5>
          </div>
          </Link>
          <div
            className="overflow-hidden relative cursor-pointer"
            style={{
              background:
                "url(https://b.zmtcdn.com/data/zomaland/a6750d1975cd3139cb91535088efb0c71578913426.jpeg?fit=around|69.75:68.25&crop=69.75:68.25;*,*)",
            }}
          >
            <div className="h-full w-full flex items-center justify-center">
              <i
                style={{
                  color: "white",
                  background: "gray",
                  padding: "5px 9px 9px 8px",
                  borderRadius: "50%",
                }}
              >
                <AddAPhotoIcon />
              </i>
            </div>
          </div>
        </div>
        <div></div>
      </div>: <ImageGridSkeleton />
      }
    </div>
  );
}

export default ImageGrid;
