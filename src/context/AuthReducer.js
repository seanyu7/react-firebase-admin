const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        return {
          currentUser: action.payload,
        };
      }
      case "LOGOUT": {
        return {
          currentUser: null,
        };
      }
      case "TOGGLE": {
        return {
          currentUser: !state.currentUser,
        };
      }
      default:
        return state;
    }
  };
  
  export default AuthReducer;