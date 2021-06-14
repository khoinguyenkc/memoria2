export default function userTokenReducer(state = { token: '', requesting: false, testValue: "linda" }, action) {

  switch (action.type) {

      case "START_REQUESTING_TOKEN":
        return {
          ...state, 
          token: [...state.token], 
          requesting: true 
        }

      case "ADD_TOKEN":
        return {
          ...state, 
          token: action.token , 
          requesting: false 
        }
   
      default:
        return state;
    }
  }
  