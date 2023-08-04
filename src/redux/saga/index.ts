import { watchAddPokemon, watchFetchPokemon, watchFetchSearchPayloadList, watchGetPokemon, watchSearchPokemon } from "./watcher";
import { fork,all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
            fork(watchFetchPokemon),
            fork(watchAddPokemon),
            fork(watchGetPokemon),
            fork(watchFetchSearchPayloadList),
            fork(watchSearchPokemon)
          ]);
}

