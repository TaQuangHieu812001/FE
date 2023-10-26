export const REGISTER_REQUEST ='REGISTER_REQUEST';
export const REGISTER_SUCCESS ='REGISTER_SUCCESS';
export const REGISTER_FAILURE ='REGISTER_FAILURE';

export const RegisterRequest =(userData)=>({
    type:REGISTER_REQUEST,
    payload:userData,
})

export const RegisterSuccess =(user)=>({
    type:REGISTER_SUCCESS,
    payload:user,
})
export const RegisterFailure =(error)=>({
    type:REGISTER_FAILURE,
    payload:error,
})



