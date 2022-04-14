import { GET_COMMISSION_DATA } from "../ActionTypes/CommissionActionType";

const INIT_STATE = {
  commissiomData: [],
};

const commissionReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_COMMISSION_DATA: {
      debugger;
      return { ...state, commissiomData: action.payload };
    }
    default:
      return { ...state };
  }
};

export default commissionReducer;
