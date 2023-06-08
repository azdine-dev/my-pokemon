import { applyMiddleware,createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../reducers";
import rootSaga from '../saga';



// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// Run the saga
sagaMiddleware.run(rootSaga);


export default store;


