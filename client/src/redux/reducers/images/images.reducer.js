import {GET_IMAGES} from './images.type'

const initialState = {
    images:[]
}
const imagesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_IMAGES:
            return{
                ...state,
                images:[...action.payload]
            }
    
        default:
            return{
                ...state
            }
    }
}
export default imagesReducer