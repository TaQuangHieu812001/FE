import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./action"

const initialState = {

    isLoading: false,
    user: null,
    error: null,
}

const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: null,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default: {
            return state;
        }
    }
}
export default RegisterReducer;

