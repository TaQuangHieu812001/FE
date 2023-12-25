import axios from "axios";
import { url } from "./config";
const apiUrl = `${url}/api/BankingTransfer`;

async function BankingTransferApi(){
    try{
        const response = await axios.get(`${apiUrl}`)
        return{
            isSuccess: true,
            msg: "",
            data: response.data.data,
        }
    }catch(error){
        return{
            isSuccess:false,
            msg:error.response.data,
        }
    }
}
export default BankingTransferApi;