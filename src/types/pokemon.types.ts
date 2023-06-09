import {
     FETCH_POKEMON_SUCCESS,
     ADD_POKEMON_SUCCESS,
     SELECTED_POKEMON,
     GET_POKEMON_ABILITY_SUCCESS,
     GET_POKEMON_SPECIES_SUCCESS,
     GET_POKEMON_TYPE_SUCCESS,
     GET_POKEMON_EVO_CHAIN_SUCCESS,
     POKEMON_SPRITE_ERROR,
     POKEMON_IMAGE_ERROR
 } from '../constants/action-types.contstants'

 export interface Pokemon {
    id: string
    name: string,
    url :string,
    abilities : any[],
    evolution_chain :any
    species : {
        url :string
    }
    types : PokemonTypes[],
    loading:boolean,
    stats:any[],
    measurements:{weight: number, height: number},
    sprites:any[],
    moves:any[],
 }

interface  PokemonTypes {
    type : {
        url :string,
        damage_relations : string,
    },  
   
}
interface FetchPokemonSuccessAction {
    type: string,
    pokemons : any[]
}



interface AddPokemonSucessAction {
    type : string,
    pokemons? : any[],
    pokemon?:any,
    abilities? :any,
    species? :string,
    evolution_chain? :string,
    types? : string

}


interface SelectedPokemonAction {
    type : string,
    pokemon :any
}

interface GetPokemonSuccess{
    type : string,
    pokemon : any
}

interface GetPokemonAbilitySuccess {
    type : string,
    abilities : string
}

interface  GetPokemonSpeciesSuccess {
    type : string,
    species : string 
}

interface GetPokemonTypeSuccess {
    type : string,
    types : string
}

interface GetPokemonEvoChainSuccess {
    type : string,
    evolution_chain :string
}

interface PokemonSpiritErrorAction {
    type : string
}

interface PokmonImageErrorAction {
    type : string
}

export type PokemonActionTypes = 

|AddPokemonSucessAction
// | FetchPokemonSuccessAction
// |SelectedPokemonAction
// |GetPokemonSuccess
// |GetPokemonAbilitySuccess
// |GetPokemonSpeciesSuccess
// |GetPokemonTypeSuccess
// |GetPokemonEvoChainSuccess
// |PokemonSpiritErrorAction
// |PokmonImageErrorAction;