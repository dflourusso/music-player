import { combineReducers } from "redux";
import { playerReducer } from "./player";

const reducers = combineReducers({ playerReducer });

export default reducers;
