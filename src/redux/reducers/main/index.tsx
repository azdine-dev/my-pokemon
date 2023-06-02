type Pokemon ={
    name : string,
    number :string
   
}
const initialState = {
    pokemons: [] as Pokemon[],
    filter: '',
    currentPokemon: null,
    loading: false,
    timer: null,
    error: null
};