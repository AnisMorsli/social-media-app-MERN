import { combineReducers } from "redux";


// all the reducers are store in this file 
// so we import all the reducers in order to combine them into one using the combineReducers fucntion
import stories from "./stories"

// must be imported from redux 
// and then export the stories as stories u can name it as u want 
export default combineReducers({
    stories
})