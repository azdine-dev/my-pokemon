import React from 'react';
import classes from './Footer.module.css'
import { Navbar, Container, NavbarBrand } from 'reactstrap';
const PokedexFooter = ()=>{
   return(
   
        <div className="footer navbar-fixed-bottom">  
           
            <div >
                     <p className = {classes['pokedex-footer-made']}>
                       Made with ❤️ in 
                   <a href="https://goo.gl/maps/tw75SSNEkv8DM8op9" target="_blank">
                     Tangier</a>
          
                    </p>
                <p>View <a href="https://github.com/azdine-dev/my-pokemon.git">Gitub</a> Code</p>

            </div>
               
        </div>
)
};

export default PokedexFooter;
