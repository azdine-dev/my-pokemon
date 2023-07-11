import React, { useEffect, Dispatch, useCallback , useState} from 'react';

import './DetailsView.css';
import { RootState } from '../../redux/reducers';
import { PokemonState } from '../../redux/reducers/pokemon.reducer';
import { ConnectedProps, MapDispatchToProps, MapStateToProps, connect } from 'react-redux';
import { UIActionTypes } from '../../types/ui.types';
import { toggleShowPopupAction } from '../../redux/actions/ui.action';
import PoketCard from '../Card/PoketCard';
import { Button, Modal } from 'react-bootstrap';
import Details from '../Details/Details';
import  BackButton from '../BackButton/BackButton'


interface OwnProps {
}

interface IDetailsView  {
    selectedPokemon? : any 
    loading? :boolean,
    showPopup? :boolean,
    handleCloseButton? : ()=>void,
}

interface IDetailsViewDispatch {
    onHandleCLoseButton : () => void;
}


interface IModalCardProps {
    show : boolean ,
    pokemon : any
    onHide :()=> void,

}


const  ModalVerticallyCentered : React.FC<IModalCardProps> = (props : IModalCardProps) =>{

const [className, setClassName] = useState('default-background');  
const classNameReceived = (cl : any) =>{
        setClassName (cl);
};  
const paddedId = '#' + props.pokemon.id.toString().padStart( 3, '000' );


return ( 
   
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  className={`cardP ${className}`} >

        <PoketCard  pokemon={props.pokemon} onClick={()=>{}} onClassChange={classNameReceived}/>
        <span className="pokemon-id">{ paddedId }</span>
        <BackButton onClick={props.onHide}/>
      </Modal.Header>
      <Modal.Body className={`bodyP ${className}`}>
        <Details pokemon={props.pokemon}/>
      </Modal.Body>
      
    </Modal>
    );

}

export type Props = IDetailsView & IDetailsViewDispatch & OwnProps;
	 
const DetailsViewPage  = (props : Props) =>{
    const {showPopup} = props; 
    const [isHidden , setIsHidden] = useState(!showPopup);

    useEffect(()=>{
        setIsHidden(!showPopup)
    },[showPopup]);

   
    return (
        <React.Fragment>
            <ModalVerticallyCentered 
                show={!isHidden}
                onHide={props.onHandleCLoseButton}
                pokemon={props.selectedPokemon}/>
        </React.Fragment>
    )
}


const  mapStateToProps:  MapStateToProps<IDetailsView, OwnProps,RootState> = (state: RootState) =>{
      return {
        selectedPokemon: (state.pokemon as PokemonState).selectedPokemon,
        loading: (state.pokemon as PokemonState).selectedPokemon.loading,
        showPopup: state.ui.showPopup,
        handleCloseButton : ()=> {}
      }
}


const mapDispatchToProps : MapDispatchToProps<IDetailsViewDispatch, OwnProps> =(dispatch: Dispatch<UIActionTypes>)=>{
   return ({
    onHandleCLoseButton: () =>{
      dispatch(toggleShowPopupAction());
    },
   })
  };

  
export default connect(mapStateToProps,mapDispatchToProps)(DetailsViewPage);

