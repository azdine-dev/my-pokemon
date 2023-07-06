import React from 'react'
import PokedexResults from './PokedexResults'
import './PokedexController.css';
import DetailsView from '../DetailsView/DetailsView';


const  PokedexControl : React.FC<{pokemons:any, ui :any}> = ({pokemons, ui}) =>{
  return (
    <div>
      {(pokemons && pokemons.length >0) ?
        <div>  
          <PokedexResults/>
        </div> 
        
        : (<div id="pokedex">
          <div id="pokedex-loading">
            <div className="loader" style={{
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

export default PokedexControl
