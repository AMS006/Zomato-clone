import { LOGIN,SIGN_UP,SIGN_OUT } from "./auth.type";
const initialState = {
}
const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                ...action.payload
            }
        case SIGN_UP:
            return{
                ...state,
                ...action.payload
            }
        case SIGN_OUT:
            return{}
        default:
            return{
                ...state
            }
    }
}
export default authReducer