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