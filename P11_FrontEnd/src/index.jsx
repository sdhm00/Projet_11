import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./../designs/css/main.css"
import App from "./App";
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers"

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
);