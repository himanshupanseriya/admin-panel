import { deleteById, addData, editData } from "../../Utils/CommonUtils";
import {
  GET_EMPLOYEE_DATA,
  DELETE_EMPLOYEE_DATA,
  EDIT_EMPLOYEE_DATA,
  SAVE_EMPLOYEE_DATA,
} from "../ActionTypes/EmployeeActionType";

const INIT_STATE = {
  employeeData: [],
};

const employeeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_DATA: {
      return { ...state, employeeData: action.payload };
    }
    case SAVE_EMPLOYEE_DATA: {
      const _employeeData = addData(state.employeeData, action.payload);
      return { ...state, employeeData: _employeeData };
    }
    case DELETE_EMPLOYEE_DATA: {
      const _employeeData = deleteById(state.employeeData, action.payload);
      return { ...state, employeeData: _employeeData };
    }
    case EDIT_EMPLOYEE_DATA: {
      const _employeeData = editData(state.employeeData, action.payload);
      return { ...state, employeeData: _employeeData };
    }
    default:
      return state;
  }
};

export default employeeReducer;
