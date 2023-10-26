import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./action"

const initialState ={
    isLoading:false,
    products:[],
    error:null,
}

const ProductReducer =(state = initialState,action)=>{
    switch(action.type){
        case PRODUCT_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:null,
            }
        case PRODUCT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                products:action.payload,
            }
        case PRODUCT_FAILURE:
            return{
                ...state,
                isLoading:false,
                error:action.payload,
            }
        default:{
            return state;
        }        
    }
}
export default ProductReducer;