import { connect } from "react-redux";
import { PokemonState } from "../../redux/reducers/pokemon.reducer";
import PokedexContainer, { IPokedex } from "./PokedexContainer";



function mapStateToProps (state: any) : IPokedex {
    return {
        pokemons : (state.pokemon as PokemonState).pokemons!,
        selectedPokemon : (state.pokemon as PokemonState).selectedPokemon,
        ui : state.ui,
        
    };
};




export default connect(
    mapStateToProps,
    null
  )(PokedexContainer);
  

