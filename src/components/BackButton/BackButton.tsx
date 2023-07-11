import { memo } from 'react';
import './BackButton.css';


const  BackButton : React.FC<{onClick :any}> = ({onClick})=> {
	return (<div className="back-button" onClick={ onClick } />);
}

export default memo( BackButton );