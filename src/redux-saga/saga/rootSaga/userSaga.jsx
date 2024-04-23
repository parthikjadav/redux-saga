import { takeLatest } from 'redux-saga/effects'
import { DELETE_USER_PENDING, GET_USER_PENDING, POST_USER_PENDING, UPDATE_USER_PENDING } from "../../user/action/action"
import { hendel_delete_user, hendel_get_user, hendel_post_user, hendel_update_user } from "../user/manageUser"

function* hendel_get_user_saga() {
    yield takeLatest(GET_USER_PENDING, hendel_get_user)
}

function* hendel_post_user_saga() {
    yield takeLatest(POST_USER_PENDING, hendel_post_user)
}

function* hendel_delete_user_saga() {
    yield takeLatest(DELETE_USER_PENDING, hendel_delete_user)
}

function* hendel_update_user_saga() {
    yield takeLatest(UPDATE_USER_PENDING, hendel_update_user)
}

export { hendel_get_user_saga,hendel_post_user_saga ,hendel_delete_user_saga,hendel_update_user_saga}