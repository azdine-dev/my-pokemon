import React ,{Component}from 'react'
import './PokdexResults.css'
import Loader from '../loader/Loader'
import Card from '../Card/Card'
import GridSystem from '../Card/GridSystem'
import { Search } from '../Search/Search'
import { Waypoint } from 'react-waypoint'


export interface IPokedexResults  {
    pagination : any 
    pokemons :any[],
    onHandleScrollEnd : (pagination :any) =>void,
    onHandleGetPokemon :(selectedPokemon :any) =>void,

}


export class  PokedexBootstrapContainer extends Component<IPokedexResults> {
    
     
 
     render(): React.ReactNode {
       const { pokemons, pagination, onHandleScrollEnd, onHandleGetPokemon} = this.props;

       console.log(this.props, 'propo')

       const handleClickAction = (pokemon:any)=>{
            onHandleGetPokemon(pokemon);
       }
       
       return(
                        <section id="portfolio" className="portfolio sections-bg">
                         <div className="container" data-aos="fade-up">
                          <Search/>
                          <GridSystem colCount={3} md={4}>
                             {pokemons
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
    
         
 }
 
 
