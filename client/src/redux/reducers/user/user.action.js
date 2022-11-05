import { GET_USER, GET_MYSELF, CLEAR_USER} from "./user.type"
import axios from "axios";
export const getMySelf = () => async(dispatch) =>{
    try {
        const user = await axios({
            method:"GET",
            url : "http://localhost:8081/user"
        })
        console.log(user.data);
        return dispatch({type:GET_MYSELF, payload:user.data})
    } catch (error) {
        return dispatch({type:"ERROR", payload: error})
    }
}
export const getUser = (id) => async(dispatch) =>{
    try {
        const user = await axios({
            method:"GET",
            url:`http://localhost:8081/user/${id}`
        })
        return dispatch({type:GET_USER, payload:user.data})
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}
export const clearUser = () => async(dispatch) =>{
    try {
        
        return dispatch({type:CLEAR_USER, payload:{}})
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}