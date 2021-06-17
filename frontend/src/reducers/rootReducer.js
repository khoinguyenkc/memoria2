 import { combineReducers } from "redux";
import authorsReducer from './authorsReducer';
import booksReducer from './booksReducer';
import userTokenReducer from './userTokenReducer';

 const rootReducer = combineReducers({
    userToken: userTokenReducer,
    authors: authorsReducer,
    books: booksReducer
   });
 

 export default rootReducer;


// export default function rootReducer(state = { 
//   restaurants: [{ name: "asdfsaf", age: 19}],
//   artists: [ "beyonce", "shakira"]
// } , action) {
//   switch (action.type) {

//     case 'ADD_RESTAURANT':
//       return {
//         ...state,
//         restaurants: [...state.restaurants, action.restaurant]
//       }

//     default:
//       return state;

//   }
// };


