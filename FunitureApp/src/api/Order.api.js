import api from "./ApiRoot";
import { url } from "./config";

const apiUrl = `${url}/api/UserOrder`;


async function GetAll(status) {
    try {
        const response = await api.get(`${apiUrl}?status=${status}`)
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
async function Add(shipping, paymentType, deliverFee, total, orderItem) {
    try {
        const response = await api.post(`${apiUrl}`, {
            shipId: shipping,
            paymentType,
            deliverFee: deliverFee,
            total,
            orderItem
        })
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
    GetAll,
    Add
};