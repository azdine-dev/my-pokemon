import React from 'react';
import classes from './Footer.module.css'
const PokedexFooter = ()=>{
   return(
   <div id= {classes['pokedex-footer']}>
     <p className = {classes['pokedex-footer-made']}>
          Made with ❤️ in <a href="https://goo.gl/maps/tw75SSNEkv8DM8op9" target="_blank">Tangier</a>
          
     </p>
     <br />
     <p>View <a href="https://github.com/azdine-dev/my-pokemon.git">Gitub</a> Code</p>

   </div>
)
};

export default PokedexFooter;
