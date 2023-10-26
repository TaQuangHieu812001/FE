import { CATEGORY_FAILURE, CATEGORY_REQUEST, CATEGORY_SUCCESS } from "./action"


const initialState ={
    isLoading:false,
    categories:[],
    error:null,
}

const CategoryReducer =(state = initialState,action)=>{
    switch(action.type){
        case CATEGORY_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:null,
            }
        case CATEGORY_SUCCESS:
            return{
                ...state,
                isLoading:false,
                categories:action.payload,
            }
        case CATEGORY_FAILURE:
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
export default CategoryReducer;