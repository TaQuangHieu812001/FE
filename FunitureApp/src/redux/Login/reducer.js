import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, CHANGE_NAME, LOGOUT } from "./action"


const initialState = {
    isLoading: false,
    dataUser: null,
    error: null,
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dataUser: action.payload,
                error: null,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                dataUser: null,
                error: action.payload,
            }
        case LOGOUT:
            return {
                ...state,
                dataUser: null
              };
        
        case CHANGE_NAME:
            let dataUser = { ...state.dataUser }
            dataUser.name = action.payload;
            return {
                ...state,
                isLoading: false,
                dataUser: dataUser,
                error: action.payload,
            }
        default: {
            return state;
        }
    }
}
export default LoginReducer;