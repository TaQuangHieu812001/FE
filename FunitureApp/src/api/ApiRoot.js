import axios from 'axios';
import store from '../store';
const options = {
    headers: {
        'Content-Type': 'application/json',
        'version': 1.0,

    },
};
let rootApi = axios.create(options);
rootApi.interceptors.request.use(function (config) {
    const state = store.getState();
    // console.log(state.LoginReducer);
    var token = state.LoginReducer.dataUser.token;
    config.headers.Authorization = 'Bearer ' + token;

    return config;
}
);
export default rootApi;
