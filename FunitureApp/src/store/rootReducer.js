import {combineReducers} from 'redux';
import RegisterReducer from '../redux/Register/reducer';
import LoginReducer from '../redux/Login/reducer';
import CategoryReducer from '../redux/Category/reducer';
import ProductReducer from '../redux/Product/reducer';

const rootReducer = combineReducers({
    RegisterReducer:RegisterReducer,
    LoginReducer:LoginReducer,
    CategoryReducer:CategoryReducer,
    ProductReducer:ProductReducer,
});
export default rootReducer;