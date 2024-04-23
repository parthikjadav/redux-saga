import { combineReducers } from "redux";
import userReducer from "./user/reducer/reducer"

let rootReducers = combineReducers({
    userReducer,
})

export default rootReducers;
