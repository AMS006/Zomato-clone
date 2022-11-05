import {combineReducers} from 'redux'
import restaurantReducer from './restaurant/restaurant.reducer';
import imagesReducer from './images/images.reducer';
import menuReducer from './menus/menu.reducer';
import userReducer from './user/user.reducer';
import authReducer from './auth/auth.reducer'
import foodReducer from './foods/food.reducer';
import reviewReducer from './reviews/review.reducer';
import cartReducer from './cart/cart.reducer';
const rootReducer = combineReducers({
    restaurantReducer,
    imagesReducer,
    authReducer,
    menuReducer,
    foodReducer,
    userReducer,
    reviewReducer,
    cartReducer
});

export default rootReducer;