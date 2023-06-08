import React from 'react';
import classes from './Footer.module.css'
const PokedexFooter = ()=>{
  const faClass = 'fa fa-heart pulse';
   return(
   <div className= {classes.footer}>
     <span>
          Made with Love in <a href="https://goo.gl/maps/tw75SSNEkv8DM8op9" target="_blank">Tangier</a>
          <p>View <a href="https://github.com/azdine-dev/my-pokemon.git">Gitub</a> Code</p>
     </span>
     
   </div>
)
};

export default PokedexFooter;
