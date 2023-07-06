import React, { Component } from 'react';
import classes from  './pokedex.module.css'
import { Dispatch, Action, AnyAction } from 'redux';
import PokedexHeader from '../../components/Header/PokedexHeader';
import PokedexFooter from '../../components/Footer/PodexFooter';
import { fetchPokemonAction } from '../../redux/actions/pokemon.action';
import PokedexControl from '../../components/results/PokedexController';
import Intro from '../../components/Intro/Intro';


export interface IPokedex<A extends Action = AnyAction> {

    ui: { searchPayload : string};
    pokemons :any[],
    selectedPokemon : any
    dispatch? : Dispatch<A>;
}
export class  PokedexContainer extends Component<IPokedex> {
   componentDidMount(){
      this.props.dispatch?.(fetchPokemonAction(this.props.ui.searchPayload));
   }

    render(): React.ReactNode {
      const { pokemons, selectedPokemon, ui } = this.props;
      
      return(
       
         (<div> 
                <PokedexHeader/>
                <Intro/>
                  
                <PokedexControl pokemons={pokemons} ui={ui}/>
                  
                <PokedexFooter/>

             </div>)
      )  
    } 
   
        
}

