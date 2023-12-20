import axios from 'axios';
import { url } from './config';

const apiUrl =`${url}/api/Registration`;

async function RegisterApi(userData) {
  try {
      const response = await axios.post(`${apiUrl}`,userData);
      console.log(response);
      return {
        isSuccess:true,
        msg:"",
        data:response.data
      }
     
  } catch (error) {
      // Xử lý lỗi khi gặp lỗi trong quá trình gọi API
      // console.log('err: ',error.response.data);
      return {
        isSuccess:false,
        msg:error.response.data
      }
  }
}

export default RegisterApi;
