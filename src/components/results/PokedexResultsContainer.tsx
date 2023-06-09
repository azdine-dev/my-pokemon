import React ,{Component}from 'react'
import classes from './PokdexResults.module.css'
import Loader from '../loader/Loader'
import Card from '../Card/Card'
import { Waypoint } from 'react-waypoint'
import {Container, Row, Col} from 'react-bootstrap'


export interface IPokedexResults  {
    pagination : any 
    pokemons :any[],
    onHandleScrollEnd : () =>void

}


export class  PokedexResultsContainer extends Component<IPokedexResults> {
  
 
     render(): React.ReactNode {
       const { pokemons, pagination, onHandleScrollEnd} = this.props
       
       return(
        <div id={classes['pokedex-list-wrapper']}>
        <section className={classes['container-card']}>
                {pokemons.length === 0 ? (
                    <Loader/>
                    ) : (
                        pokemons
                        .sort((a, b) => a.id - b.id)
                        .map((el,index) => (
                           <Card pokemon={el} key ={index}/>
                        )))
                 }

                        {pagination.nextUrl ? 
                            
                            ( <div className="waypoint">
                                  {/* <Waypoint 
                                     onEnter={onHandleScrollEnd.bind(this, pagination)}
                                  />
                                  <div className="loader" style={{width:'50px',height:'50px'}}></div>
                                  <p>Fetching data please wait...</p> */}
                                </div>
                            ) 
                            :( <div className="waypoint">
                                  <p>End of result.</p>
                                </div>
                            )  
               }
                    
                
         </section>
        </div>
       )  
     } 
    
         
 }
 
 
