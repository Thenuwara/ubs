import { combineReducers } from "@reduxjs/toolkit";
import basicSlice from "./basic-slice";
import errorSlice from "./error-slice";

export default combineReducers({
    basicSlice,
    errorSlice,
});
