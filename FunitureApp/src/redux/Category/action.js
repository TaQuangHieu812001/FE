export const CATEGORY_REQUEST = 'CATEGORY_REQUEST';
export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_FAILURE = 'CATEGORY_FAILURE';



export const CategoryRequest = () => ({
    type: CATEGORY_REQUEST,
    payload,
})

export const CategorySuccess = (categories) => ({
    type: CATEGORY_SUCCESS,
    payload: categories,
})
export const CategoryFailure = (error) => ({
    type: CATEGORY_FAILURE,
    payload: error,
})