import React, { useLayoutEffect, useRef } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'


import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { aN, bN, gN, rN } from '../../utils/inline-styles';
const PokedexHeader = ()=>{
    const navColor = '#2c3e50'
    
 
  
  return (<div>
<header id="header" className="headerP d-flex align-items-center sticked">

   <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
  <a href="" className="logo d-flex align-items-center">
    {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
    {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
    <h1>PokedexM</h1>
  </a>
  <nav id="navbar" className="navbar">
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

     {/* <a href="https://github.com/azdine-dev/my-pokemon"
        target="_blank">
     <img style={{position : 'absolute', top:0, right : 0, border : 0, zIndex : 1031}}
         src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" 
         alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"/>
     </a> */}
  </div>
  )
}

export default PokedexHeader;
