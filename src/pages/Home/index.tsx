import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Header from "../../components/Header";




const Home = ({history, ...props} : any)=>{

    
     return (
        <div>
         <Header />
  
        </div>
     )
}

// function mapStateToProps(state) {
//     return { 
//         pokemons: state.mainReducer.pokemons, 
//         loading: state.mainReducer.loading, 
//         timer: state.mainReducer.timer,
//         filter: state.mainReducer.filter,
//         error: state.mainReducer.error
//     }
// };

// const actionCreators = {
//     resetData,
//     fetchAll,
// };
export default connect();