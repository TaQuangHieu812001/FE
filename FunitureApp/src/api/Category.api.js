import axios from "axios";
import { url } from "./config";

// const apiUrl = 'http://192.168.1.115:5000/api/Category';
const apiUrl =`${url}/api/Category`;
async function CategoryApi() {
    try {

        const response = await axios.get(`${apiUrl}`)
        return {
            isSuccess: true,
            msg: "",
            data: response.data,
        }
    } catch (error) {
        return {
            isSuccess: false,
            msg: error.response.data,
        }
    }



}

export default CategoryApi;