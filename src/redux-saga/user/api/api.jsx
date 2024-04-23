import axios from "axios"
import { DELETE_USER, GET_USER, POST_USER, UPDATE_USER, base_url } from "../../constants"

export const get_user = (action) => {
    return axios.get(base_url + GET_USER).then((res) => {
        return { "data": res.data, "status": res.status }
    })
}

export const post_user = (action) => {
    console.log(action, " res action");
    let data = { name:action.payload }
    return axios.post(base_url + POST_USER, data).then((res) => {
        console.log(res.data, "res");
        return { "data": res.data, "status": res.status }
    })
}

export const delete_user = (action) => {
    return axios.delete(base_url + DELETE_USER + action.payload).then((res) => {
        return { "data": res.data, "status": res.status }
    })
}

export const update_user = (action) => {
    console.log(base_url + UPDATE_USER + action.payload.id,"action from api");
    return axios.put(base_url+UPDATE_USER+action.payload.id,action.payload).then((res) => {
        console.log(res,'res from api');
        return { "data": res.data, "status": res.status }
    })
}
