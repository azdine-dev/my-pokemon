import React ,{Component, useState}from 'react'
import './Search.css'

type SearchState = {
  query :string,
  onSearch : (query :string) => void
}

const   Search : React.FC<{onSearch : (query :string)=> void}> = ({onSearch}) =>{

      const [query, setQuery] = useState('');
     
      const handleSubmit = (e :any)=>{
           e.preventDefault();
           onSearch(query);
      }
      const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
         setFunction(event.target.value)
      }
       return(
        // <div className="section-header">
        //     <h2>List of Pokemons</h2>
            
        // </div>
        <div className="main-search-input-wrap">
              <div className="main-search-input fl-wrap">
                <form onSubmit={handleSubmit}>
                  <div className="main-search-input-item">
                      <input type="text"  value={query} onChange={(e)=> inputChangeHandler(setQuery, e)} placeholder="Search Pokemons..."/>
                  </div>
                  <button className="main-search-button" type='submit'>Search</button>
                </form>
              </div>
        </div>
        )

     } 

     export default Search;
         

 
 
