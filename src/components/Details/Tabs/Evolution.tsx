import React, { Dispatch } from 'react'
import { PokemonActionTypes } from '../../../types/pokemon.types';
import { getPokemonAction, selectPokemonAction } from '../../../redux/actions/pokemon.action';
import { ConnectedProps, connect } from 'react-redux'
import { toggleShowPopupAction } from '../../../redux/actions/ui.action';

interface IEvolutionProps {
    pokemon:any, 
    handleSelectPokemon : (pokemon :any)=> void
}


const Evolution : React.FC<IEvolutionProps> = (props : IEvolutionProps) => {
     

    const evolutionTable = props.pokemon?.species?.evolution_chain?.evolutionTable;
    

    const onSelectPokemon = (pokemon :any) =>{
       props.handleSelectPokemon(pokemon);
    }
    

    return (
       <React.Fragment>
         {    evolutionTable && (
                    ! evolutionTable.length ?
                        <strong className='error-msg'>This Pokémon doesn't Evolve</strong>
                    :
                    evolutionTable.map((evolution : any, index :number) => {
                        // const { current, next } = evolution;
                        const length = evolutionTable.length;
                        if(index <= length -2){
                            const current = evolutionTable[index][0];
                            const next = evolutionTable[index+1][0];
                            return (
                                <div className='evolution-container' key={ index}>
                                    <div>
                                        <div className='poke-img' onClick={onSelectPokemon.bind(this,current)}>
                                            <div className='pokeball-bg'></div>
    
                                            <img src={ current.displayImage } alt='pokemon-image' />
                                        </div>
    
                                        <span>{ current.name }</span>
                                    </div>
    
                                    <span className='arrow'></span>
    
                                    <div>
                                        <div className='poke-img' onClick={onSelectPokemon.bind(this,next)}>
                                            <div className='pokeball-bg'></div>
    
                                            <img src={ next.displayImage } alt='pokemon-image' />
                                        </div>
    
                                        <span>{ next.name }</span>
                                    </div>
                                </div>
                            );
                        }
                    })
                    ) // evolutionTable
                }

       </React.Fragment>
    
    )


}

const mapDispatchToProps = (dispatch: Dispatch<PokemonActionTypes>) => ({
    
    handleSelectPokemon:(selectedPokemon :any) => {
        dispatch(toggleShowPopupAction());
        dispatch(selectPokemonAction(selectedPokemon));
        dispatch(getPokemonAction(selectedPokemon));
        dispatch(toggleShowPopupAction());

    }
})

const connector = connect(null, mapDispatchToProps);

type EvolutionProps = ConnectedProps<typeof connector>;

export default connector(Evolution);


