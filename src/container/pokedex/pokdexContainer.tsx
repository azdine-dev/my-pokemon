import React, { FunctionComponent } from 'react';
import classes from  './pokedex.module.css'
import PokedexHeader from '../../components/Header/PokedexHeader';

export interface IPokedex {

    ui: { searchPayload : string};
    pokemons :any[],
    selectedPokemon : any
}
export const  PokedexContainer : FunctionComponent<IPokedex> = props =>{

    const { pokemons, selectedPokemon, ui } = props;
        return(
          <div>
          {pokemons && selectedPokemon
             ? <div>
                  <PokedexHeader/>
               </div>
                :
                <div id={classes.pokedex}>
                  <div id={classes['pokedex-loading']}>
                    <div className={classes.loader} style={{
                      width: "200px",
                      height: "200px"
                      }}>
                    </div>
                  </div>
                </div>
          
            }
           </div>
        ) 
        
}

