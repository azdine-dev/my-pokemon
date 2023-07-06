
import { Col, Container, Row } from 'react-bootstrap'
import { getRandonmPokemonType } from '../../utils/pokemon-types.generator'
import './Card.css'
import  React , {memo} from 'react'
const Card : React.FC<{pokemon:any, onClick : (pokemon:any)=>void}> = ({pokemon, onClick}) => {

     const randomClassName =  getRandonmPokemonType()
     const paddedId = '#' + pokemon.id.toString().padStart( 3, '000' )
     const getPokemon = (pokemon :any )=>{
           console.log('clicked Pokemon', pokemon)
           onClick(pokemon);    
     }

    return(
    
   <div className="card bg-default mb-3 mt-4" >
                    {/* <div className=" card-header" style={{backgroundColor : '#00AA9E'}}><b>Bulbasaur</b></div>
                    <img className="card-img-top" src={pokemon.displayImage} alt="Card image cap"/>
                    <div className="card-body"> */}
                        {/* <p className="card-text">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne animata corpora quaeritis.
                            Summus brains sit​​, morbo vel maleficia?</p> */}
                    {/* </div> */}
     <div className="portfolio-item">
       <div className="portfolio-wrap"> 
          <a href="#" onClick={getPokemon.bind(this,pokemon)}>
            <img src={pokemon.displayImage} className="card-img-top" alt=""/>
          </a>  
          <div className="portfolio-info">
               <span>{paddedId}</span>
              <h4><a href="#" title="More Details"  onClick={getPokemon.bind(this,pokemon)}>{pokemon.name}</a></h4>
          </div>
       </div>
     </div>      
    </div>

)
}

export default memo(Card)