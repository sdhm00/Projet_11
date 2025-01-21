import { combineReducers } from "@reduxjs/toolkit";
import signIn from "./signIn.reducer";
import userModif from "./userModif.reducer";
import signOut from "./signOut.reducer";

export default combineReducers({
    signIn,
    signOut,
    userModif,
});