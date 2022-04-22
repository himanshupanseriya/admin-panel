import {
  getCommissionData,
  deleteCommissionData,
  saveCommissionData,
  updateCommissionData,
} from "../../Services/CommissionApi";
import {
  GET_COMMISSION_DATA,
  DELETE_COMMISSION_DATA,
  SAVE_COMMISSION_DATA,
  UPDATE_COMMISSION_DATA,
} from "../ActionTypes/CommissionActionType";

export function commissionDate() {
  return async (dispatch) => {
    const res = await getCommissionData();
    return dispatch({
      type: GET_COMMISSION_DATA,
      payload: res.data,
    });
  };
}

export function commissionDataDelete(id) {
  return async (dispatch) => {
    const res = await deleteCommissionData(id);
    return dispatch({
      type: DELETE_COMMISSION_DATA,
      payload: id,
    });
  };
}

export function commissionDataSave(data) {
  ;
  return async (dispatch) => {
    const res = await saveCommissionData(data);
    
    return dispatch({
      type: SAVE_COMMISSION_DATA,
      payload: res.data,
    });
  };
}

export function commissionDataUpdate(data) {
  return async (dispatch) => {
    const res = await updateCommissionData(data._id, data);
    return dispatch({
      type: UPDATE_COMMISSION_DATA,
      payload: res.data,
    });
  };
}
