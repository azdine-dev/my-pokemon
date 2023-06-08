import {SELECTED_POKEMON,
        FETCH_POKEMON_REQUEST,
        ADD_POKEMON_REQUEST,
        GET_POKEMON_REQUEST,
        POKEMON_SPRITE_ERROR

    }  from '../../constants/action-types.contstants'
export const selectPokemonAction = (pokemon :any) => ({
  type: SELECTED_POKEMON,
  pokemon
});

export const fetchPokemonAction = (payload :any) => ({
  type: FETCH_POKEMON_REQUEST,
  payload: {},
});

export const addPokemonAction = (url :any) => ({
  type: ADD_POKEMON_REQUEST,
  url
});

export const getPokemonAction = (selectedPokemon :any) => ({
  type:GET_POKEMON_REQUEST,
  selectedPokemon
});

export const spriteErrorAction = (selectedPokemon :any) => ({
  type:POKEMON_SPRITE_ERROR,
  selectedPokemon
});

export const imageErrorAction = (selectedPokemon :any) => ({
  type:POKEMON_SPRITE_ERROR,
  selectedPokemon
});
