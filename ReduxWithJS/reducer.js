export const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count++ };
    case "Decrement":
      return { ...state, count: state.count-- };
    case "Add":
      return { ...state, count: (state.count += action.payload) };
    case "Sub":
      return { ...state, count: (state.count -= action.payload) };
    case "Mul":
      return { ...state, count: (state.count *= action.payload) };
    case "Div":
      return { ...state, count: (state.count /= action.payload) };
    case "Clr":
      return { ...state, count: (state.count = 0) };
    default:
      return state;
  }
};
