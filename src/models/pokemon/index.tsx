export interface IPokemon {
    name : string,
    number:string
}

export type PokemonState = {
    pokemons: IPokemon[],
    filter: string,
    currentPokemon: IPokemon,
    loading: boolean,
    timer: string,
    error: string
}

export type PokemonAction = {
    type: string,
    payload: PokemonState,
    // (x:PokemonAction):PokemonAction;   


};
  