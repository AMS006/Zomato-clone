import { GET_USER,GET_MYSELF, CLEAR_USER } from "./user.type";

const initialState = {
    user:{}
}
const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_USER:
            return{
                ...state
            }
        case GET_MYSELF:
            return{
                ...state,
                user:action.payload
            }
        case CLEAR_USER:
            return{
                user:{}
            }    
        default:
            return{
                ...state
            }
            break;
    }
}
export default userReducer