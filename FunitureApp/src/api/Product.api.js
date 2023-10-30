import axios from "axios";
import { url } from "./config";

const apiUrl = `${url}/api/Product`;

async function ProductApiFilter(cateId = null, priceFrom = null, priceTo = null, name = null) {
    try {

        const response = await axios.get(`${apiUrl}?isHome=false&cateId=${cateId ? cateId : ''}&priceFrom=${priceFrom ? priceFrom : ''}&priceTo=${priceTo ? priceTo : ''}&name=${name ? name : ''}`)
        if (response.data.success)
            return {
                isSuccess: true,
                msg: "",
                data: response.data.data,
            }
        else {
            return {
                isSuccess: false,
                msg: response.data.message
            }
        }
    } catch (err) {
        if (err.response) {
            return {
                isSuccess: false,
                msg: err.response.data.message
            }
        }
        return {
            isSuccess: false,
            msg: err.message
        }
        console.log(err)
    }
}
async function ProductHome() {
    try {
        const response = await axios.get(`${apiUrl}?isHome=true`)
        if (response.data.success)
            return {
                isSuccess: true,
                msg: "",
                data: response.data.data,
            }
        else {
            return {
                isSuccess: false,
                msg: response.data.message
            }
        }
    } catch (err) {
        return {
            isSuccess: false,
            msg: err.message,
            data: null,
        }
        console.log(err)
    }
}
async function GetProductDetail(id) {
    try {
        const response = await axios.get(`${apiUrl}/${id}`)
        if (response.data.success)
            return {
                isSuccess: true,
                msg: "",
                data: response.data.data,
            }
        else {
            return {
                isSuccess: false,
                msg: response.data.message
            }
        }
    } catch (err) {
        return {
            isSuccess: false,
            msg: err.message,
            data: null,
        }
        console.log(err)
    }
}
export default {
    ProductHome,
    ProductApiFilter,
    GetProductDetail
};