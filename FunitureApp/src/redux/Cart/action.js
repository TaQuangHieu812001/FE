export const ADD = 'ADD_CART';
export const RM = 'RM_CART';
export const CLEAR = 'CLEAR_CART'
export const UPDATE = 'UPDATE_CART';

export const AddToCart = (payload) => ({
    type: ADD,
    payload,
})

export const RemoveFromCart = (index) => ({
    type: RM,
    payload: localId,
})
export const UpdateCart = (index, data) => ({
    type: UPDATE,
    payload: { index, data }
})
export const ClearCart = () => ({
    type: CLEAR,
})