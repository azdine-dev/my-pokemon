import { connect } from "react-redux";
import { RootState } from "../../redux/reducers";
import { PokemonState } from "../../redux/reducers/pokemon.reducer";
import { IPokedex, PokedexContainer } from "./pokdexContainer";



function mapStateToProps (state: RootState) : IPokedex {
    return {
        pokemons : (state.pokemon as PokemonState).pokemons!,
        selectedPokemon : (state.pokemon as PokemonState).selectedPokemon,
        ui : state.ui
    };
};




export default connect(
    mapStateToProps,
    null
  )(PokedexContainer);
  

