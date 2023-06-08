import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import rootSaga from '../saga';



// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        thunk: false,
        logger  : logger
      }).concat(sagaMiddleware)
});

// Run the saga
sagaMiddleware.run(rootSaga);


export default store;


