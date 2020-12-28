
const defaultState = {
   watchList: [],
   selectedMovie: {}
};

const watchListReducer = (state = defaultState, { type, payload }) => {
   switch (type) {
      case "UPDATE_WATCH_LIST":
         return {
            ...state,
            watchList: payload
         }
      case "UPDATE_SELECTED_MOVIE":
         return {
            ...state,
            selectedMovie: payload
         }
      default:
         return state
   };
};
export default watchListReducer;


