import { getCommissionData } from "../../Services/CommissionApi";
import { GET_COMMISSION_DATA } from "../ActionTypes/CommissionActionType";

export function commissionDate() {
  return async (dispatch) => {
    const res = await getCommissionData();
    return dispatch({
      type: GET_COMMISSION_DATA,
      payload: res.data,
    });
  };
}
