import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import fetchSaga from '../sagas/fetch-saga'
import {mainReducer} from '../reducers';
import {pokemonReducer} from '../reducers';
const initSagas = createSagaMiddleware();

const combinedReducers = combineReducers({
    mainReducer,
    pokemonReducer
});

const store = createStore(
    combinedReducers,
    compose(
        applyMiddleware(
            initSagas,
            thunk,
            logger)
    )
);

initSagas.run(fetchSaga);

export default store;