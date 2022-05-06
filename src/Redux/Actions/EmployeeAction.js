import {
  GET_EMPLOYEE_DATA,
  DELETE_EMPLOYEE_DATA,
  EDIT_EMPLOYEE_DATA,
  SAVE_EMPLOYEE_DATA,
} from "../ActionTypes/EmployeeActionType";
import {
  getEmployeesData,
  deleteEmployee,
  updateEmployee,
  saveEmployee,
} from "../../Services/EmployeeApi";

export function employeeData() {
  return async (dispatch) => {
    const res = await getEmployeesData();
    return dispatch({
      type: GET_EMPLOYEE_DATA,
      payload: res.data,
    });
  };
}

export function employeeDataDelete(id) {
  return async (dispatch) => {
    await deleteEmployee(id);
    return dispatch({
      type: DELETE_EMPLOYEE_DATA,
      payload: id,
    });
  };
}

export function employeeDataSave(data) {
  return async (dispatch) => {
    const res = await saveEmployee(data);
    return dispatch({
      type: SAVE_EMPLOYEE_DATA,
      payload: res.data,
    });
  };
}

export function employeeDataUpdate(id, data) {
  return async (dispatch) => {
    const res = await updateEmployee(id, data);
    return dispatch({
      type: EDIT_EMPLOYEE_DATA,
      payload: res.data,
    });
  };
}
