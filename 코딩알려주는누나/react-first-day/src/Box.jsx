import React from 'react';

function Box(props){
	const  clickMe = (props) => {
		alert({props});		
	}
	return(
		<div className="box">
			Box{props.num}
			{props.name}
			<button onClick={clickMe}>클릭</button>
		</div>
	)
}

export default Box;