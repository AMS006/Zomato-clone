import React,{useState, useEffect} from 'react'
import Dialog from '@mui/material/Dialog';
import { useParams } from 'react-router-dom';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import RatingCard from './RatingCard';
import {addReview} from '../../redux/reducers/reviews/review.action'
import {useDispatch,useSelector} from 'react-redux'

function ReviewModal(props) {
    const {id} = useParams();
    const [reviewData, setReviewData] = useState({
        reviewDescription: "",
        reviewTitle: "",
        isRestaurantReview: false,
        isFoodReview: false,
        rating: 0,
        restaurant:id,
    });
    useEffect(() => {
      if(props.type === "dining"){
        setReviewData((prev) => ({
          ...prev,
          isRestaurantReview:true,
          isFoodReview:false
        }))
      }
      else if(props.type === 'delivery'){
        setReviewData((prev) =>({
          ...prev,
          isRestaurantReview:false,
          isFoodReview:true
        }))
      }
    }, [props.type])
    
    const handleClose = () => {
        props.setOpen(false);
    };
    const dispatch = useDispatch()
    const handleSubmit = () =>{
        console.log(reviewData);
        dispatch(addReview(reviewData));
        console.log('reviewSubmited');
        setReviewData({
          reviewDescription: "",
          reviewTitle:"",
          isRestaurantReview: false,
          isFoodReview: false,
          restraunt:"",
          rating: 0
        })
        handleClose();
    }
    const handleDining = () =>{
      setReviewData((prev) =>({
        ...prev,
        isRestaurantReview: !prev.isRestaurantReview,
        isFoodReview: false
      }))
    }
    const handleDelivery = () =>{
      setReviewData((prev) =>({
        ...prev,
        isRestaurantReview: false,
        isFoodReview: !prev.isFoodReview
      }))
    }
    const handleChange = (e) =>{
      setReviewData((prev) =>({
        ...prev,
        rating:props.value,
        [e.target.id]:e.target.value
    }))
    }
    const handleRating = (rating) =>{
      setReviewData((prev) =>({...prev, rating:props.value}))
    }

    const [value, setValue] = React.useState(2);
    useEffect(()=>{
      setReviewData((prev) =>({...prev, rating:props.value}))
    },[props.value])
    
   return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className='flex justify-between border-b pb-3'>
            <h2 className='text-2xl '>Add Review</h2>
            <span onClick={() => handleClose()} className="cursor-pointer">
              <CloseIcon fontSize='medium'/>
            </span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className='flex gap-6 px-2 py-3'>
              <div className='flex gap-2 items-center'>
                <input type="radio" name="review" id="dining" value="" onChange={() => handleDining()} checked={reviewData.isRestaurantReview}/>
                <label htmlFor="dining">Dining</label>
              </div>
              <div className='flex gap-2 items-center'>
                  <input type="radio" name="review" id="delivery" value=""  onChange={() => handleDelivery()} checked={reviewData.isFoodReview}/>
                  <label htmlFor="delivery">Delivery</label>
              </div>
            </div>
            <RatingCard value={props.value} onChange={handleRating} id="rating" setValue={props.setValue}/>
            <div>
                <label htmlFor="title" className='text-lg'>Add a Review Title</label>
                <input type="text" name="review-title" onChange={handleChange} className='border w-full py-1 px-1 rounded' placeholder='Enter Title...' id="reviewTitle" />
            </div>
            <div className='py-2'>
                <label htmlFor="text" className='text-lg'>Add your Review</label>
                <textarea type="text" rows={5} name="review-text" onChange={handleChange} className='border w-full py-1 px-1 rounded' placeholder='Enter Title...' id="reviewDescription" />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className='border px-3 py-1 rounded text-gray-500 duration-300  bg-white  '>Cancel</button>
          <button onClick={() => handleSubmit()} className='border px-3 py-1 rounded text-white duration-300  bg-zomato-500 hover:bg-zomato-600'>
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ReviewModal
