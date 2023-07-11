import React , {Dispatch } from 'react'
import { RootState } from '../../redux/reducers'
import { PokemonState } from '../../redux/reducers/pokemon.reducer'
import { connect } from 'react-redux'
import { PokemonActionTypes } from '../../types/pokemon.types'
import { addPokemonAction, getPokemonAction, selectPokemonAction } from '../../redux/actions/pokemon.action'
import { IPokedexResults, PokedexBootstrapContainer } from './PokedexBootstrapContainer'
import { toggleShowPopupAction } from '../../redux/actions/ui.action'


  interface IDispatchPokedexResults {
   onHandleSelectPokemon: (selectedPokemon :any) => void,
   onHandleScrollEnd    : ()=>void,
   onHandleGetPokemon   : ()=>void,
   onHandleSpriteError  : ()=>void
}


function mapStateToProps (state: RootState) : IPokedexResults {
   return {
       pokemons : (state.pokemon as PokemonState).pokemons!,
       pagination : state.ui.pagination,
       onHandleScrollEnd :()=>{},
       onHandleGetPokemon : ()=> {}       
   }
}

const mapDispatchToProps = (dispatch: Dispatch<PokemonActionTypes>) => ({

   onHandleGetPokemon:(selectedPokemon :any) => {
      dispatch(toggleShowPopupAction());
      dispatch(selectPokemonAction(selectedPokemon));
      dispatch(getPokemonAction(selectedPokemon));
    },
   onHandleScrollEnd(pagination :any) {
       console.log(pagination, 'onHandleScrollEnd');
       dispatch(addPokemonAction(pagination.nextUrl))
   }
})


export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(PokedexBootstrapContainer)
 