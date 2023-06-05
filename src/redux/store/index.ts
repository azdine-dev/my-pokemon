import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";


// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : rootReducer
});

