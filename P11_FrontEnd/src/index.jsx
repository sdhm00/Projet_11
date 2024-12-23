import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers"
import "./../designs/css"

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
  
reportWebVitals()