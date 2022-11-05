import axios from 'axios'
import {GET_RESTAURANTS,GET_SPECIFIC_RESTAURANT} from './restaurant.type'

export const getRestaurants = () => async(dispatch) =>{
    try {
        const restaurantList = await axios({
            method:"GET",
            url:"http://localhost:8081/restaurant"
        })
        return dispatch({
            type:GET_RESTAURANTS,
            payload: restaurantList.data.restaurant
        })
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}
export const getRestaurant = (_id) => async(dispatch) =>{
    try {
        const restaurant = await axios({
            method:"GET",
            url:`http://localhost:8081/restaurant/${_id}`
        })
        return dispatch({
            type:GET_SPECIFIC_RESTAURANT,
            payload: restaurant.data.restaurant
        })
    } catch (error) {
        return dispatch({
            type:"ERROR",
            payload:error
        })
    }
}