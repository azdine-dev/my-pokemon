import React, { memo, useEffect } from "react";
import { getPokemonDisplayImageFromID } from "../../utils/pokemon-operations";

import './PoketCard.css'

const  PoketCard : React.FC<{pokemon:any, onClick :any, onClassChange :any}> =    ( { pokemon, onClick, onClassChange } ) => {
	if ( ! pokemon ) {
		return null;
	}

	const { name, id, types } = pokemon;
	const imgURL = getPokemonDisplayImageFromID( id ),
		className = types?.map( (  t :any ) => 'type-' + t?.type?.name ).join( ' ' ),
		paddedId = '#' + id.toString().padStart( 3, '000' );

	useEffect(()=>{
		onClassChange(className)
	}, [className])	
    
	return (
		// <div className="cardP-container" onClick={onClick}>
			<div className={ `cardP ${className}` }>


				<div className="cardP-title">
					<h2>
						{ name.replace( /-/g, ' ' ) }
					</h2>
					<div className="pokemon-types">
						{
							types?.map(  (t:any)   => (
								<span className="type" key={ t?.type.name }>{ t?.type.name }</span>
							) )
						}
				</div>

					
				</div>
				


				

			</div>
		// </div>
	);
}

export default memo( PoketCard );