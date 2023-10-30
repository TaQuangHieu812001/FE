import { combineReducers } from 'redux';
import RegisterReducer from '../redux/Register/reducer';
import LoginReducer from '../redux/Login/reducer';
import CategoryReducer from '../redux/Category/reducer';
import ProductReducer from '../redux/Product/reducer';
import CartReducer from '../redux/Cart/reducer';
const rootReducer = combineReducers({
    RegisterReducer: RegisterReducer,
    LoginReducer: LoginReducer,
    CategoryReducer: CategoryReducer,
    ProductReducer: ProductReducer,
    CartReducer: CartReducer
});
export default rootReducer;