import { ADD, RM, CLEAR, UPDATE } from "./action"


const initialState = []

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD: {

            let newState = [].concat(state);
            //check product exist
            let isExist = false;
            for (let i = 0; i < newState.length; i++) {
                if (action.payload.product.id == newState[i].product.id) {

                    if (action.payload.productAttribute.id == newState[i].productAttribute.id) {
                        isExist = true;
                        newState[i].count++;
                    }

                }
            }
            if (!isExist)
                newState.push(action.payload);
            return newState;
        }
        case RM:
            {
                let newState = [].concat(state);
                newState = newState.splice(action.payload, 1);
                return newState;
            }
        case UPDATE: {
            let newState = [].concat(state);
            console.log(newState[action.payload.index])
            newState[action.payload.index] = { ...action.payload.data };
            console.log(newState[action.payload.index])
            return newState;
        }

        case CLEAR:
            return [];
        default: {
            return state;
        }
    }
}
export default CategoryReducer;