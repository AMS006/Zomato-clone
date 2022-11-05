import React,{useState} from 'react'
import ImageViewer from 'react-simple-image-viewer'
function Menu({menuImages}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  const openImage = (index) => {
    setCurrentImage(index)
    openViewer();
  }
  return (
    <>
      {menuImages ? <div>
        {isMenuOpen && <ImageViewer
          src={ menuImages }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeViewer }
        />}
        <div className=' rounded overflow-hidden h-48 cursor-pointer' onClick={() => openImage(0)}>
          <img src={menuImages[0]} className="h-full overflow-hidden object-cover duration-700 hover:scale-105" alt="" />
        </div>
          <h1>Food Menu</h1>
          <h6 className='text-gray-400'>{menuImages.length} pages</h6>
      </div>: "Loading..."}
    </>
  )
}

export default Menu
