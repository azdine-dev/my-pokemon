import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { ConnectedProps, MapDispatchToProps, connect } from "react-redux";


import './Header.css'
import { Dispatch, Action, AnyAction } from 'redux';
import { searchPokemonAction } from '../../redux/actions/pokemon.action';
import { PokemonActionTypes } from '../../types/pokemon.types';

interface PokedexHeaderProps extends PropsFromRedux {}



const PokedexHeader = (props : PokedexHeaderProps)=>{

  const [time, setTime] = useState<NodeJS.Timeout  | null>(null);
  
    const handleSubmit = (e :any)=>{
        e.preventDefault();
        props.onSearchChanged(e.target.value)
    }
    const inputChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (time) clearTimeout(time); // Clear the previous timeout if it exists
      setTime(setTimeout(() => {
        props.onSearchChanged(e.target.value); // Dispatch the search action here
      }, 1500));
    }, [time, props.onSearchChanged]);
         
    
    
  return (<div>
<header id="header" className="headerP d-flex align-items-center sticked">

   <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
  <a href="" className="logo d-flex align-items-center">
    {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
    {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
    <h1>PokedexM</h1>
  </a>
  <nav id="navbar" className="navbar">
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input type="text"  onChange={(e)=> inputChangeHandler(e)} 
        placeholder="What pokemon are you looking for ?" />
      </form>
    </div>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    
  </nav>

  <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
  <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

</div>
</header>
  </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<PokemonActionTypes>) => ({
  
   onSearchChanged: (payload:any) =>{
     dispatch(searchPokemonAction(payload));
   },

});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


export default connector(PokedexHeader)


