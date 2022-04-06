const initialState = {
  sidebarShow: true,
  varDef: 2,
  ManageDefs: 2,
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

export default changeState;
