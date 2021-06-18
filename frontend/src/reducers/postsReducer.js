export default function postsReducer(state = { posts: [], requesting: false }, action) {
    let idx;

    switch (action.type) {
  
        case "START_REQUESTING_POSTS":
          return {
            ...state, 
            posts: [...state.posts], 
            requesting: true 
          }
  

        case "ADD_POST":
            return {
                ...state,
                posts: [...state.posts, action.post],
                requesting: false
            }
       
        case "REMOVE_POST":
              //remove action should have an id to locate the post
            idx = state.findIndex(post => post.id  === action.id)
            return {
                ...state,
                posts: [...state.posts.slice(0, idx), ...state.posts.slice(idx + 1)],
                requesting: false
            }
       
    
     
        default:
          return state;
      }
    }
    