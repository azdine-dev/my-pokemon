import React , {Dispatch } from 'react'
import { RootState } from '../../redux/reducers'
import { IPokedexResults, PokedexResultsContainer } from './PokedexResultsContainer'
import { PokemonState } from '../../redux/reducers/pokemon.reducer'
import { connect } from 'react-redux'
import { PokemonActionTypes } from '../../types/pokemon.types'
import { selectPokemonAction } from '../../redux/actions/pokemon.action'
import { PokedexBootstrapContainer } from './PokedexBootstrapContainer'


  interface IDispatchPokedexResults {
   onHandleSelectPokemon: (selectedPokemon :any) => void,
   onHandleScrollEnd    : ()=>void,
   onHandleGetPokemon   : ()=>void,
   onHandleSpriteError  : ()=>void
}


function mapStateToProps (state: RootState) : IPokedexResults {
   console.log(state, 'ST')
   return {
       pokemons : (state.pokemon as PokemonState).pokemons!,
       pagination : state.ui.pagination,
       onHandleScrollEnd :()=>{}       
   }
}

const mapDispatchToProps = (dispatch: Dispatch<PokemonActionTypes>) => ({

	onHandleSelectPokemon: (selectedPokemon :any) => {
      // dispatch(selectPokemonAction(selectedPokemon))
      console.log('onHandleScrollEnd')
   }
})


export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(PokedexBootstrapContainer)
 