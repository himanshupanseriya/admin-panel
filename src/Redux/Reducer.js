import { combineReducers } from "redux";
import changeState from "./Reducers/ChangeState";
import commissionReducer from "./Reducers/CommissionReducer";
import employeeReducer from "./Reducers/EmployeeReducer";

const rootReducer = combineReducers({
  changeState: changeState,
  employeeReducer: employeeReducer,
  commissionReducer: commissionReducer,
});

export default rootReducer;
