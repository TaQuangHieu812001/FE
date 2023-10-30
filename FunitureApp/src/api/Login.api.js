import axios from "axios";
import { url } from "./config";

// const apiUrl ='http://192.168.1.115:5000/api/Login';
const apiUrl = `${url}/api/Login`;
async function LoginApi(user) {
  try {
    const response = await axios.post(`${apiUrl}`, user);


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

export default LoginApi;
