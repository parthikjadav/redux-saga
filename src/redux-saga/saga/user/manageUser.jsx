import { DELETE_USER_FAILED, DELETE_USER_SUCCESS, POST_USER_FAILED, POST_USER_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_SUCCESS } from "../../user/action/action";
import { delete_user, get_user, post_user, update_user } from "../../user/api/api"
import { call, put } from "redux-saga/effects";

function* hendel_get_user(action) {

    try {
        let {status, data} = yield call(get_user, action)
        
        if(status == 200){
            yield put({type: "GET_USER_SUCCESS", data: data})
        }else{
            yield put({type: "GET_USER_FAILED", data: data})
        }
        
    } catch (error) {
        yield put({type: "GET_USER_FAILED", error})

    }
}

function* hendel_post_user(action){
    try {
        let {status, data} = yield call(post_user, action)
        if(status == 200 || 201){
            yield put({type: POST_USER_SUCCESS, data})
        }else{
            yield put({type: POST_USER_FAILED,data})
        }
    } catch (error) {
        yield put({ type: POST_USER_FAILED, error })
    }
}

function* hendel_delete_user(action){
try {
    let {data,status}= yield call(delete_user, action)

    if(status == 200){
        yield put({type: DELETE_USER_SUCCESS, data})
    }else{
        yield put({type: DELETE_USER_FAILED, data})
    }
} catch (error) {
    yield put({type: DELETE_USER_FAILED, error})
}
}

function* hendel_update_user(action){
    try {
        let {status, data} = yield call(update_user, action)

        if(status == 200){
            yield put({type: UPDATE_USER_SUCCESS, data})
        }else{
            yield put({type: UPDATE_USER_FAILED, data})
        }
    } catch (error) {
        yield put({type: UPDATE_USER_FAILED, error})
    }
}

export { hendel_get_user , hendel_post_user , hendel_delete_user,hendel_update_user}