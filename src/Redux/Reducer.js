import { combineReducers } from "redux";
import changeState from "./Reducers/ChangeState";
import employeeReducer from "./Reducers/EmployeeReducer";

const rootReducer = combineReducers({
    changeState: changeState,
    employeeReducer:employeeReducer
})

export default rootReducer;