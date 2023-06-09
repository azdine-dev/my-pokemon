import React from 'react';

import classes from './Header.module.css'
const PokedexHeader = ()=>(
  <div>
    {/* <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand">
        Pokédex |
      </a>
      <a href="https://www.linkedin.com/in/azeddin-benhlima/" 
         className="navbar-brand author" target="_blank">
          Written in React by Azeddin BENHLIMA
         </a>
    </div>
  </div>
</div> */}
<a href="https://github.com/azdine-dev/my-pokemon"
 target="_blank">
    <img style={{position : 'absolute', top:0, right : 0, border : 0, zIndex : 1031}}
  src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" 
  alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"/>
  </a>
  </div>
)

export default PokedexHeader;
