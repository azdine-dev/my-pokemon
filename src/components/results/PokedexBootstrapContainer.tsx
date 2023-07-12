import React ,{Component, useState}from 'react'
import './PokdexResults.css'
import Loader from '../loader/Loader'
import Card from '../Card/Card'
import GridSystem from '../Card/GridSystem'
import Search  from '../Search/Search'
import { Waypoint } from 'react-waypoint'


export interface IPokedexResults  {
    pagination : any 
    pokemons :any[],
    onHandleScrollEnd : (pagination :any) =>void,
    onHandleGetPokemon :(selectedPokemon :any) =>void,

}


const PokedexBootstrapContainer :React.FC<IPokedexResults> = (props :IPokedexResults) =>{
    const [poks, setPoks] = useState(props.pokemons); 
    const { pokemons, pagination, onHandleScrollEnd, onHandleGetPokemon} = props;
    const handleClickAction = (pokemon:any)=>{
            onHandleGetPokemon(pokemon);
    }

    const receiveQuery = (query :string) => {
         
      const pokemonsFiltered = pokemons.filter((pokemon :any) => {
              return (pokemon?.name.includes(query) || pokemon?.id.includes(query));
      });
      setPoks(pokemonsFiltered)
    }
       
       return(
                        <section id="portfolio" className="portfolio sections-bg">
                         <div className="container" data-aos="fade-up">
                          <Search onSearch = {receiveQuery}/>
                          <GridSystem colCount={3} md={4}>
                             {poks
                               .sort((a, b) => a.id - b.id)
                               .map((el,index) => (
                               <Card pokemon={el} key ={index} onClick = {handleClickAction}/>))
                             }
                             
                           </GridSystem> 
                           <div>
                             {pagination.nextUrl ? 
                            
                               (  <div className="waypoint">
                                  <Waypoint 
                                     onEnter={onHandleScrollEnd.bind(this,pagination)}
                                  />
                                  <div className="loader" style={{width:'50px',height:'50px'}}></div>
                                    <p>Fetching data please wait...</p>
                                  </div>
                                ) 
                            :   (  <div className="waypoint">
                                     <p>End of result.</p>
                                   </div>
                                )  
                              }
                            </div>
                         </div>
                        </section>
                          
                      ) 
  
  }
  
  export default PokedexBootstrapContainer;
    
         
 
 
 
