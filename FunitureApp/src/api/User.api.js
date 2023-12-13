import api from "./ApiRoot";
import { url } from "./config";

// const apiUrl ='http://192.168.1.115:5000/api/Login';
const apiUpdateProfile = `${url}/api/Login/updateprofile`;
const apiUpdatePass = `${url}/api/Login/updatepass`;
async function UpdateProfile(user) {
    try {
        const response = await api.put(`${apiUpdateProfile}`, user);


        // Xử lý dữ liệu khi nhận được phản hồi thành công
        return {
            isSuccess: response.data.success,
            msg: response.data.success ? '' : response.data.message,
            data: response.data.success ? response.data.data : null
        }

    } catch (error) {
        // Xử lý lỗi khi gặp lỗi trong quá trình gọi API
        return {
            isSuccess: false,
            msg: error.response.data
        }
    }
}
async function UpdatePass(user) {
    try {
        const response = await api.put(`${apiUpdatePass}`, user);


        // Xử lý dữ liệu khi nhận được phản hồi thành công
        return {
            isSuccess: response.data.success,
            msg: response.data.success ? '' : response.data.message,
            data: response.data.success ? response.data.data : null
        }

    } catch (error) {
        // Xử lý lỗi khi gặp lỗi trong quá trình gọi API
        return {
            isSuccess: false,
            msg: error.response.data
        }
    }
}
export default { UpdateProfile, UpdatePass };
