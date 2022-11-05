import { GET_MENUS } from "./menu.type";

const initialState = {
    menus : []
}
const menuReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_MENUS:
            return{
                ...state,
                menus: [{...action.payload}]
            }
    
        default:
            return{
                ...state
            }
    }
}
export default menuReducer;