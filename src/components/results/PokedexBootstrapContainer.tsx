import React ,{Component}from 'react'
import classes from './PokdexResults.module.css'
import Loader from '../loader/Loader'
import Card from '../Card/Card'
import { Waypoint } from 'react-waypoint'
import {Container, Row, Col} from 'react-bootstrap'
import GridSystem from '../Card/GridSystem'


export interface IPokedexResults  {
    pagination : any 
    pokemons :any[],
    onHandleScrollEnd : () =>void

}


export class  PokedexBootstrapContainer extends Component<IPokedexResults> {
  
 
     render(): React.ReactNode {
       const { pokemons, pagination, onHandleScrollEnd} = this.props
       
       return(
        <div>
           <div>
                {pokemons.length === 0 ? (
                    <Loader/>
                    ) : (
                         <GridSystem colCount={4} md={3}>
                             {pokemons
                               .sort((a, b) => a.id - b.id)
                               .map((el,index) => (
                               <Card pokemon={el} key ={index}/>))
                             }
                             
                          </GridSystem> 
                           
                      )
                 }
         </div>
         <div>
         {pagination.nextUrl ? 
                            
                            ( <div>
                                  {/* <Waypoint 
                                     onEnter={onHandleScrollEnd.bind(this, pagination)}
                                  /> */}
                                  {/* <div className="loader" style={{width:'50px',height:'50px'}}></div> */}
                                  <p>Fetching data please wait...</p>
                                </div>
                            ) 
                            :( <div >
                                  <p>End of result.</p>
                                </div>
                            )  
                        }
         </div>


        </div>
       )  
     } 
    
         
 }
 
 
