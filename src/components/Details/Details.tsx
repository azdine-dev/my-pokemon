import React from 'react';
import {memo, useState} from 'react';
import { getPokemonDisplayImageFromID } from '../../utils/pokemon-operations';
import './Details.css';
import About from './Tabs/About';
import BaseStats from './Tabs/BaseStats';
import Evolution from './Tabs/Evolution';

const TAB_ABOUT = 'about';
const TAB_STATS = 'base-stats';
const TAB_EVOLUTION = 'evolution';
const TAB_DEFAULT = TAB_ABOUT;

const tabs = [
	{
		id: TAB_ABOUT,
		label: 'About',
	},
	{
		id: TAB_STATS,
		label: 'Base Stats',
	},
	{
		id: TAB_EVOLUTION,
		label: 'Evolution',
	},
];

interface IDetailsProps {
    pokemon :any
}

const Details : React.FC<IDetailsProps> = (props : IDetailsProps) =>{
    const [ currentTab, setCurrentTab ] = useState( TAB_DEFAULT );
	const imgURL = getPokemonDisplayImageFromID( props.pokemon?.id );

	if ( ! props.pokemon ) {
		return null;
	}

	// Return tab switch class name.
	const getClassName = ( tabName :string) => {
		return `tab-switch ${ currentTab === tabName ? 'active' : '' }`;
	};

	// Change pokemon data & go to first tab.
	const onPokemonChange = () => {
		setCurrentTab( TAB_DEFAULT );
	};

    return (
        <div className="details">

			<img src={ imgURL } className="pokemon-image" alt={ props.pokemon.name } />

			<div className="tabs-switch-container">
				{
					tabs.map( ( { id, label } ) => (
						<button key={ id } className={ getClassName( id ) } onClick={ () => setCurrentTab( id ) }>
							{ label }
						</button>
					) )
				}
			</div>

			{
				( () => {
					switch ( currentTab ) {
						case TAB_ABOUT:
							return <About pokemon={ props.pokemon } />;

						case TAB_STATS:
							return <BaseStats stats={ props.pokemon?.stats } />;

						case TAB_EVOLUTION:
							return <Evolution pokemon={props.pokemon}/>;

						default:
							return null;
					}
				} )()
			}


        </div>  
    )
}

export default Details;