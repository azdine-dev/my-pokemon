import React, { useEffect, Dispatch, useCallback , useState} from 'react';

import './DetailsView.css';
import { RootState } from '../../redux/reducers';
import { PokemonState } from '../../redux/reducers/pokemon.reducer';
import { ConnectedProps, MapDispatchToProps, MapStateToProps, connect } from 'react-redux';
import { UIActionTypes } from '../../types/ui.types';
import { toggleShowPopupAction } from '../../redux/actions/ui.action';
import PoketCard from '../Card/PoketCard';
import { Button, Modal } from 'react-bootstrap';


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
    onHide :()=> void
}


const  ModalVerticallyCentered : React.FC<IModalCardProps> = (props : IModalCardProps) =>{
   
return ( 
    // ReactDOM.createPortal(
	// 	<React.Fragment>
	// 	(<div>
    //     <Overlay hidden={ isHidden } onClick={ closeModal } />
         
	// 		<div className={ `details-view-container ${ isHidden && 'hidden' }` } onAnimationEnd={ handleAnimationEnd }>
	// 			 {/* <BackButton onClick={ closeModal } /> */}
	// 			 <PoketCard pokemon={ detailsView.selectedPokemon } onClick={{}}/>
	// 			{/* <Details pokemon={ currentPokemon } />  */}
    //            <h1>HELLOOOO</h1>
    //       </div>
    //       </div>)
          
	// 	</React.Fragment>, document.body)
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
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

    const handleAnimationEnd = useCallback( ( animationName:any  ) => {
		if ( animationName !== 'pull-down-center' ) {
			return;
		}
		setIsHidden( false );
	} ,[]);

    const closeModal = useCallback(()=>{
           console.log('123');
          setIsHidden(true);
    },[])
  
    return (
        <React.Fragment>
            <ModalVerticallyCentered show={!isHidden}
            onHide={props.onHandleCLoseButton}/>
        </React.Fragment>
    )
}


const  mapStateToProps:  MapStateToProps<IDetailsView, OwnProps,RootState> = (state: RootState, props:OwnProps) =>{
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

