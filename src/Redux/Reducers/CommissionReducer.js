import {
  GET_COMMISSION_DATA,
  DELETE_COMMISSION_DATA,
  SAVE_COMMISSION_DATA,
  UPDATE_COMMISSION_DATA,
} from "../ActionTypes/CommissionActionType";
import { deleteById, addData, editData } from "../../Utils/CommonUtils";

const INIT_STATE = {
  commissionData: [],
};

const commissionReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_COMMISSION_DATA: {
      return { ...state, commissionData: action.payload };
    }
    case DELETE_COMMISSION_DATA: {
      const _commissionData = deleteById(state.commissionData, action.payload);
      return { ...state, commissionData: _commissionData };
    }
    case SAVE_COMMISSION_DATA: {
      
      const _commissionData = addData(state.commissionData, action.payload);
      return { ...state, commissionData: _commissionData };
    }
    case UPDATE_COMMISSION_DATA: {
      const _commissionData = editData(state.commissionData, action.payload);
      return { ...state, commissionData: _commissionData };
    }
    default:
      return { ...state };
  }
};

export default commissionReducer;
