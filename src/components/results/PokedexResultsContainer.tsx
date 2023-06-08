import React ,{Component}from 'react';
import classes from './PokdexResults.module.css';


export interface IPokedexResults {
    pagination : any; 
    pokemons :any[],
}

export class  PokedexResultsContainer extends Component<IPokedexResults> {
  
 
     render(): React.ReactNode {
       const { pokemons, pagination } = this.props;
       
       return(
        <section className= "section pokedex-results overflow-visible">
          <ul className="results" style={{height : 'auto'}}>
             {pokemons.map(pokemon =>{
                return( 
                 <li key={pokemon.id}>
                   {pokemon.name}
                </li>)
             })}
            
          </ul>
        </section>
       )  
     } 
    
         
 }
 
 
