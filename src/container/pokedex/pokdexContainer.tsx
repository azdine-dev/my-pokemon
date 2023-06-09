import React, { Component } from 'react';
import classes from  './pokedex.module.css'
import { Dispatch, Action, AnyAction } from 'redux';
import PokedexHeader from '../../components/Header/PokedexHeader';
import PokedexFooter from '../../components/Footer/PodexFooter';
import { fetchPokemonAction } from '../../redux/actions/pokemon.action';
import PokedexControl from '../../components/results/PokedexController';


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
        <div>
        {pokemons && selectedPokemon
           ? (<div> 
                <PokedexHeader/>
                  
                <PokedexControl pokemons={pokemons} />
                  
                <PokedexFooter/>

             </div>)
              :
              (<div id={classes.pokedex}>
                <div id={classes['pokedex-loading']}>
                  <div className={classes.loader} style={{
                    width: "200px",
                    height: "200px"
                    }}>
                  </div>
                </div>
              </div>)
        
          }
         </div>
      )  
    } 
   
        
}

