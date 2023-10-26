import axios from "axios";
import { url } from "./config";

const apiUrl = `${url}/api/Product`;

async function ProductApi(){
    try{
        const response = axios.get(`${apiUrl}`)
        return {
            isSuccess: true,
            msg: "",
            data: response.data,
        }
    }catch(err){
        console.log(err)
    }
}

export default ProductApi;