import React from 'react';
import { RootState } from '../../redux/reducers';
import { IPokedexResults, PokedexResultsContainer } from './PokedexResultsContainer';
import { PokemonState } from '../../redux/reducers/pokemon.reducer';
import { connect } from 'react-redux';

function mapStateToProps (state: RootState) : IPokedexResults {
   console.log(state, 'ST')
   return {
       pokemons : (state.pokemon as PokemonState).pokemons!,
       pagination : state.ui.pagination,       
   };
};


export default connect(
   mapStateToProps,
   null
 )(PokedexResultsContainer);
 