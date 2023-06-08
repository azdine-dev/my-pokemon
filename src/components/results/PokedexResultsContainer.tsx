import React ,{Component}from 'react';
import classes from './PokdexResults.module.css';
import Loader from '../loader/Loader';


export interface IPokedexResults {
    pagination : any; 
    pokemons :any[],
}

export class  PokedexResultsContainer extends Component<IPokedexResults> {
  
 
     render(): React.ReactNode {
       const { pokemons, pagination } = this.props;
       
       return(
        <div id={classes['pokedex-list-wrapper']}>
        <section className={classes['container-card']}>
                {pokemons.length === 0 ? (
                    <Loader/>
                    ) : (
                        pokemons
                        .sort((a, b) => a.id - b.id)
                        .map((el,index) => (
                            <h1>{el.name}</h1>
                        ))
                    )
                }
         </section>
        </div>
       )  
     } 
    
         
 }
 
 
