import { GET_EMPLOYEE_DATA } from "../ActionTypes/EmployeeActionType";

const INIT_STATE = {
  employeeData: [],
};

const employeeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_DATA:
      return { ...state, employeeData: action.payload };
    default:
      return state;
  }
};

export default employeeReducer;
