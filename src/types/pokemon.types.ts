import {
     FETCH_POKEMON_SUCCESS,
     ADD_POKEMON_SUCCESS,
     SELECTED_POKEMON,
     GET_POKEMON_SUCCESS,
     GET_POKEMON_ABILITY_SUCCESS,
     GET_POKEMON_SPECIES_SUCCESS,
     GET_POKEMON_TYPE_SUCCESS,
     GET_POKEMON_EVO_CHAIN_SUCCESS,
     POKEMON_SPRITE_ERROR,
     POKEMON_IMAGE_ERROR
 } from "../constants/action-types.contstants"

 export interface Pokemon {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: object[]
    forms: object[]
    game_indices: object[]
    held_items: object[]
    location_area_encounters: string
    moves: object[]
    sprites: object
    species: object
    stats: object[]
    types: object[]
}
interface FetchPokemonSuccessAction {
    type: typeof FETCH_POKEMON_SUCCESS,
    pokemons : Pokemon
}

interface AddPokemonSucessAction {
    type : typeof ADD_POKEMON_SUCCESS,
    pokemons : Pokemon[]
}

interface SelectedPokemonAction {
    type : typeof SELECTED_POKEMON,
    pokemon :Pokemon
}

interface GetPokemonSuccess{
    type : typeof GET_POKEMON_SUCCESS,
    pokemon : Pokemon
}

interface GetPokemonAbilitySuccess {
    type : typeof GET_POKEMON_ABILITY_SUCCESS,
    abilities : string
}

interface  GetPokemonSpeciesSuccess {
    type : typeof GET_POKEMON_SPECIES_SUCCESS,
    species : string 
}

interface GetPokemonTypeSuccess {
    type : typeof GET_POKEMON_TYPE_SUCCESS,
    types : string
}

interface GetPokemonEvoChainSuccess {
    type : typeof GET_POKEMON_EVO_CHAIN_SUCCESS,
    evolution_chain :string
}

interface PokemonSpiritErrorAction {
    type : typeof POKEMON_SPRITE_ERROR
}

interface PokmonImageErrorAction {
    type : typeof POKEMON_IMAGE_ERROR
}

export type PokemonActionTypes = 
| FetchPokemonSuccessAction
|AddPokemonSucessAction
|SelectedPokemonAction
|GetPokemonSuccess
|GetPokemonAbilitySuccess
|GetPokemonSpeciesSuccess
|GetPokemonTypeSuccess
|GetPokemonEvoChainSuccess
|PokemonSpiritErrorAction
|PokmonImageErrorAction;