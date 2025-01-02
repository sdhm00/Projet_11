import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./../designs/css/main.css"
import App from "./App";
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers"

// const store = configureStore({
//     reducer: rootReducer,
//     devTools: true,
// });

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
        <App />
    {/* </Provider> */}
  </BrowserRouter>
);