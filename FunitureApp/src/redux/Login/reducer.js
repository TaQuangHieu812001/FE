import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./action"


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
        default: {
            return state;
        }
    }
}
export default LoginReducer;