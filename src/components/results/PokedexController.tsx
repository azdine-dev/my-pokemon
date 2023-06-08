import React from 'react';
import PokedexResults from './PokedexResults';



const  PokedexControl : React.FC<{pokemons:any}> = ({pokemons}) =>{
  return (
    <div >
      {pokemons ?
        <div>
          <PokedexResults/>
        </div>
        : "No Results"
      }
    </div>
  );
}

export default PokedexControl;
