import React, { memo } from "react";
import { getPokemonDisplayImageFromID } from "../../utils/pokemon-operations";

import './PoketCard.css'

const  PoketCard : React.FC<{pokemon:any, onClick :any}> =    ( { pokemon, onClick } ) => {
	if ( ! pokemon ) {
		return null;
	}

	const { name, id, types } = pokemon;

	const imgURL = getPokemonDisplayImageFromID( id ),
		// className = types.map( (  type :any ) => 'type-' + type.name ).join( ' ' ),
		paddedId = '#' + id.toString().padStart( 3, '000' );

	return (
		<div className="cardP-container" onClick={ onClick }>
			<div className={ `cardP` }>

				<div className="bg-pokeball"></div>
				<span className="pokemon-id">{ paddedId }</span>

				<div className="cardP-title">
					<h2>
						{ name.replace( /-/g, ' ' ) }
					</h2>

					{/* <div className="pokemon-types">
						{
							types.map( ( type :any ) => (
								<span className="type" key={ type.name }>{ type.name }</span>
							) )
						}
					</div> */}
				</div>

				<div className="pokemon-image">
					<img alt={ name } src={ imgURL } />
				</div>

			</div>
		</div>
	);
}

export default memo( PoketCard );