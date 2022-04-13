import { GET_EMPLOYEE_DATA } from "../ActionTypes/EmployeeActionType";
import { getEmployeesData } from "../../Services/EmployeeApi";

export function employeeData() {
  return async (dispatch) => {
    const res = await getEmployeesData();
    return dispatch({
      type: GET_EMPLOYEE_DATA,
      payload: res.data,
    });
  };
}
