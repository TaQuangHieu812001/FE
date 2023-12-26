import axios from "axios";
import api from "./ApiRoot";
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
async function UploadImage(uri){
    try{
        let data = new FormData();
        var photo={
            uri:uri,
            type:'image/jpg',
            name:'photo'
        }
        data.append('files', photo);
        const response = await api({url:`${url}/api/UserOrder/payment-banking-upload`,
        method:'post',
        data:'',
        headers:{
            "Content-Type":'multipart/form-data',

        },
        data:data
    })
    console.log(response.data);
        return{
            isSuccess: response.data.success,
            msg: response.data.message,
            data: response.data.data,
        }
    }catch(error){
        return{
            isSuccess:false,
            msg:error.response.data,
        }
    }
}
async function UpdateOrder(urlimg,orderId){
    try{
      console.log(`${url}
      ​/api​/UserOrder​/payment-banking-update?idOrder=${orderId}`)
        const response = await api.post(`${url}/api/UserOrder/payment-banking-update?idOrder=${orderId}`,urlimg)
    console.log(response.data);
        return{
            isSuccess: response.data.success, 
            msg: response.data.message,
            data: response.data.data,
        }
    }catch(error){
        console.log(error)
        if(error.response)
        return{
            isSuccess:false,
            msg:error.response.data,
        }
    }
}
export default {
    UploadImage,
    BankingTransferApi,
    UpdateOrder};