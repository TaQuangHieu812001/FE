import api from "./ApiRoot";
import { url } from "./config";

const apiUrl = `${url}/api/Shipping`;


async function GetAll() {
    try {
        const response = await api.get(`${apiUrl}`)
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
async function Add(address, phone, name, zip) {
    try {
        const response = await api.post(`${apiUrl}`, {
            Address: address, PhoneNumber: phone, Name: name, ZipCode: zip
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
async function Update(address, phone, name, zip, active, id) {
    try {
        const response = await api.patch(`${apiUrl}`, {
            Address: address, PhoneNumber: phone, Name: name, ZipCode: zip, Active: active, Id: id
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
        console.log(err.response.data)
        return {
            isSuccess: false,
            msg: err.message,
            data: null,
        }
        console.log(err)
    }
}
async function UpdateActive(id) {
    try {
        console.log(id)
        const response = await api.put(`${apiUrl}?id=${id}`)
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
        console.log(err.response.data)
        return {
            isSuccess: false,
            msg: err.message,
            data: null,
        }
        console.log(err)
    }
}
async function Delete(id) {
    try {
        const response = await api.delete(`${apiUrl}?id=${id}`)
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
    Add, Update, Delete, UpdateActive
};