export default (state: any, action: any) => {
  switch (action.type) {
    case "SET_SELECTED_MOVIE":
      return {
        ...state,
        selectedMovie: action.payload,
      };
    default:
      return state;
  }
};
