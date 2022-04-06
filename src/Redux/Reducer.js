import { combineReducers } from "redux";
import changeState from "./Reducers/ChangeState";

const rootReducer = combineReducers({
    changeState: changeState,
})

export default rootReducer;