import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';


type Pokemon ={
    name : string,
    number:string
}

let pokemonsOriginal :Pokemon[]= [];
const perPage = 16;
const limit = 48; //default = 898
let max = 0;

const Home = ({history, ...props} : any)=>{

    const { query } = props.match.params;

    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([] as Pokemon[]);

    function HandlerResult(maximum :number , pokemons :Pokemon[] ) {
        max = maximum;
        setPokemons(pokemons);
    }
    
    useEffect(() => {
        setLoading(true);
        let nezPo = pokemonsOriginal.slice(0, perPage)
        if (query == undefined) {
          HandlerResult(
            pokemonsOriginal.length,
            pokemonsOriginal.slice(0, perPage)
          );
          setLoading(false);
          return false;
        }
    
        history.push(`/${query}`);
        var filterPokemons = pokemonsOriginal.filter((item) => {
          return (
            item.name.includes(query.toLowerCase()) || item.number.includes(query)
          );
        });
    
        HandlerResult(filterPokemons.length, filterPokemons.slice(0, perPage));
        setLoading(false);
      }, [query]);
    
      useEffect(() => {
        setLoading(true);
        var listLocal = VerifyPokemons();
        if (listLocal == null) {
          LoadPokemons();
          return false;
        }
    
        pokemonsOriginal = listLocal;
        if (query != undefined) {
          var filterPokemons = listLocal.filter(
            (i) => i.name.includes(query.toLowerCase()) || i.number.includes(query)
          );
    
          HandlerResult(filterPokemons.length, filterPokemons.slice(0, perPage));
        } else {
          HandlerResult(listLocal.length, listLocal.slice(0, perPage));
        }
        setLoading(false);
      }, []);
    
     return (
        <div></div>
     )
}

export default Home;