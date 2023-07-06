import React, { memo } from 'react'
import ReactDOM from 'react-dom';

import './Overlay.css'

const Overlay : React.FC<{ onClick:any, hidden :boolean }> = ({onClick, hidden}) => {

	return ReactDOM.createPortal(
		<div
			onClick={ onClick }
			className={ `overlay ${ hidden && 'hidden' }` }
		/>,
		document.body,
	);

}

export default memo(Overlay);