
const defaultState = {
    movieList: [],
    searchText: ""
};

const movieListReducer = (state = defaultState, {type, payload}) => {
      switch(type) {
             case "UPDATE_MOVIES" :
             return {
                ...state, 
                movieList: payload
                }
             case "UPDATE_SEARCH_TEXT":
               return {
                  ...state,
                  searchText: payload
               }   
             default :
                return state
};
};
export default movieListReducer;


