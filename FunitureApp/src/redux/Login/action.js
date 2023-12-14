export const LOGIN_REQUEST = 'REGISTER_REQUEST';
export const LOGIN_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_FAILURE = 'REGISTER_FAILURE';
export const CHANGE_NAME = 'CHANGE_NAME';
export const LOGOUT = 'LOG_OUT';

export const LoginRequest = (userData) => ({
    type: LOGIN_REQUEST,
    payload: userData,
})

export const LoginSuccess = (dataUser) => ({
    type: LOGIN_SUCCESS,
    payload: dataUser,
})
export const LoginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
})
export const ChangeProfile = (name) => ({
    type: CHANGE_NAME,
    payload: name
})
export const Logout = () => ({
    type: LOGOUT,
  });
