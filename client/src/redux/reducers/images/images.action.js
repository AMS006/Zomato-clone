import axios from 'axios';

import {GET_IMAGES} from './images.type'

export const getImages = (_id) => async (dispatch) =>{
    try {
        const images = await axios({
            method:"GET",
            url:`http://localhost:8081/image/${_id}`
        })
        return dispatch({
            type:GET_IMAGES,
            payload:images.data.image.images
        })
    } catch (error) {
        return dispatch({
            type:"ERROR",
            payload:error
        })
    }
}