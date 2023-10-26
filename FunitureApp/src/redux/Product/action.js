export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE';

export const ProductRequest =()=>({
    type:PRODUCT_REQUEST,
    payload,
})

export const ProductSuccess =(products)=>({
    type:PRODUCT_SUCCESS,
    payload:products,
})
export const ProductFailure = (error) => ({
    type: PRODUCT_FAILURE,
    payload: error,
})

