import { combineReducers } from "redux";
import financials from "./financials.js";
import budget from "./budget.js";

export default combineReducers({ 
    financials, 
    budget 
});