
import { Col, Container, Row } from 'react-bootstrap'
import { getRandonmPokemonType } from '../../utils/pokemon-types.generator'
import './Card.css'
import  React , {memo} from 'react'
const Card : React.FC<{pokemon:any}> = ({pokemon}) => {

     const randomClassName =  getRandonmPokemonType()
     const paddedId = '#' + pokemon.id.toString().padStart( 3, '000' )

    return(
    //     <div className="card-container"
    //     //  onClick={ onClick }
    //      >
    //     <div className={ `card ${randomClassName} ` }>

    //         <div className="bg-pokeball"></div>
    //         <span className="pokemon-id">{ paddedId }</span>

    //         <div className="card-title">
    //             <h2>
    //                 { pokemon.name.replace( /-/g, ' ' ) }
    //             </h2>

    //         </div>

    //         <div className="pokemon-image">
    //             <img alt={pokemon.name} src={ pokemon.displayImage } />
    //         </div>

    //     </div>
    // </div>
  
   <div className="card bg-default mb-3 mt-4" >
                    <div className=" card-header" style={{backgroundColor : '#00AA9E'}}><b>Bulbasaur</b></div>
                    <img className="card-img-top" src={pokemon.displayImage} alt="Card image cap"/>
                    <div className="card-body">
                        {/* <p className="card-text">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne animata corpora quaeritis.
                            Summus brains sit​​, morbo vel maleficia?</p> */}
                    </div>
     </div>

)
}

export default memo(Card)