export default function usersReducer(state = { users: [], requesting: false }, action) {
    let idx;

    switch (action.type) {
  
        case "START_REQUESTING_USERS":
          return {
            ...state, 
            users: [...state.posts], 
            requesting: true 
          }
  

        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.user],
                requesting: false
            }

       
    
     
        default:
          return state;
      }
    }
    