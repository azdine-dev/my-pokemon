import { takeLatest } from 'redux-saga/effects';
import * as types from '../../constants/action-types.contstants';
import { addPokemonSaga, fetchPokemonSaga, getPokemonSaga } from './pokemon.saga';
import { fetchSearchPayloadListSaga } from './ui.saga';


export function* watchFetchPokemon() {
  yield takeLatest(types.FETCH_POKEMON_REQUEST, fetchPokemonSaga);
}

export function* watchAddPokemon() {
  yield takeLatest(types.ADD_POKEMON_REQUEST, addPokemonSaga);
}

export function* watchGetPokemon() {
  yield takeLatest(types.GET_POKEMON_REQUEST, getPokemonSaga);
}

export function* watchFetchSearchPayloadList() {
  yield takeLatest(types.FETCH_PAYLOAD_LIST_REQUEST, fetchSearchPayloadListSaga)
}
