import axios from 'axios'
import {GET_REVIEW, ADD_REVIEW, DELETE_REVIEW} from './review.type'

export const getReview = (_id) =>async(dispatch) =>{
    try {
        const reviews = await axios({
            method:"GET",
            url:`http://localhost:8081/review/${_id}`
        })
        return dispatch({type:GET_REVIEW, payload:reviews.data})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error })
    }
}
export const addReview = (reviewData) => async(dispatch) =>{
    try {
        const reviews = await axios({
            method:"POST",
            url:"http://localhost:8081/review",
            data:reviewData
        })
        return dispatch({type:ADD_REVIEW, payload:reviews.data.review})
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}