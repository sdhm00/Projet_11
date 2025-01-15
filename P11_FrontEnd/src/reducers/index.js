import { combineReducers } from "@reduxjs/toolkit";
import signIn from "./signIn.reducer";
import userModif from "./userModif.reducer";

export default combineReducers({
    signIn,
    userModif,
});