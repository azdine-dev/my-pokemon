import React, { Component, useEffect, useState } from 'react';
import classes from  './pokedex.module.css'
import { Dispatch, Action, AnyAction } from 'redux';
import PokedexFooter from '../../components/Footer/PodexFooter';
import { fetchPokemonAction } from '../../redux/actions/pokemon.action';
import PokedexControl from '../../components/results/PokedexController';
import Intro from '../../components/Intro/Intro';
import PokedexHeader from '../../components/Header/PokedexHeader';


export interface IPokedex<A extends Action = AnyAction> {

    ui: { searchPayload : string};
    pokemons :any[],
    selectedPokemon : any
    dispatch? : Dispatch<A>;
}

 
const PokedexContainer =(props:IPokedex) => {

   useEffect(()=>{
       props.dispatch?.(fetchPokemonAction(props.ui.searchPayload));
   },[]);

   const { pokemons, selectedPokemon, ui } = props;
  
     
      
      return(
       
         (<div> 
                <PokedexHeader/>
                <Intro/>
                  
                <PokedexControl pokemons={pokemons} ui={ui}/>
               
                <PokedexFooter/>

             </div>)
      )  
} 


export default PokedexContainer;