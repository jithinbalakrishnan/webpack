
const defaultState = {
    loggedInUser: {},
};

const loginReducer = (state = defaultState, {type, payload}) => {
      switch(type) {
             case "UPDATE_LOGGED_IN_USER" :
             return {
                ...state, 
                loggedInUser: payload
                }
             default :
                return state
};
};
export default loginReducer;


