import React from 'react'
import PokedexResults from './PokedexResults'



const  PokedexControl : React.FC<{pokemons:any}> = ({pokemons}) =>{
  return (
    <div className="container-fluid">
      {pokemons ?
        
          <PokedexResults/>
        
        : 'No Results'
      }
     </div>
  )
}

export default PokedexControl
