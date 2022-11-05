import { GET_FOOD } from "./food.type";

const initialState = {
    food: {} 
}
const foodReducer = (state = initialState,action) =>{
    switch (action.type) {
        case GET_FOOD:
            return{
                ...state,
                food:{...action.payload}
            }
        default:
            return{
                ...state,
            }
    }
}
export default foodReducer