import axios from "axios";
import { GET_FOOD } from "./food.type";
export const getFood = (id) => async(dispatch) =>{
    try {
        const food = await axios({
            method:"GET",
            url:`http://localhost:8081/food/${id}`
        })
        
        return dispatch({type:GET_FOOD, payload:food.data})
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}