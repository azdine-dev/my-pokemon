import * as types from '../../constants/action-types.contstants'
import initState from './initial-state'
import { PokemonActionTypes } from '../../types/pokemon.types'
import * as URL from '../../constants/url'


export interface PokemonState {
    pokemons?: any[]
    selectedPokemon? :any
  }

  export default function pokemonReducer(
  state = initState,
  action: PokemonActionTypes,
) :  PokemonState{
    switch (action.type) {
        case types.FETCH_POKEMON_SUCCESS:
          return {...state, pokemons: action.pokemons }
        case types.ADD_POKEMON_SUCCESS:
          const newPokemons = state.pokemons.concat(...action.pokemons as any[]);
          console.log(newPokemons, 'newPokemons');
          return {...state, pokemons:newPokemons}
        case types.SELECTED_POKEMON:
          return { ...state, selectedPokemon: {...action.pokemon, loading:true} }
        case types.GET_POKEMON_SUCCESS:
          return { ...state, selectedPokemon: {...state.selectedPokemon, ...action.pokemon, loading:false} }
        case types.GET_POKEMON_ABILITY_SUCCESS:
          return { ...state, selectedPokemon: {...state.selectedPokemon, abilities: action.abilities} }
        case types.GET_POKEMON_SPECIES_SUCCESS:
          return { ...state, selectedPokemon: {...state.selectedPokemon, species: action.species} }
        case types.GET_POKEMON_TYPE_SUCCESS:
          return { ...state, selectedPokemon: {...state.selectedPokemon, types: action.types} }
        case types.GET_POKEMON_EVO_CHAIN_SUCCESS:
          return { ...state, selectedPokemon: {...state.selectedPokemon, species: {...state.selectedPokemon.species, evolution_chain : action.evolution_chain}} }
        case types.POKEMON_SPRITE_ERROR:
          return { ...state, selectedPokemon: {...state.selectedPokemon, displaySprite: URL.POKEMON_SPRITES_NODATA_URL} }
        case types.POKEMON_IMAGE_ERROR:
          return { ...state, selectedPokemon: {...state.selectedPokemon, displaySprite: URL.POKEMON_SPRITES_NODATA_URL} }
        default:
          return state
    }
}

