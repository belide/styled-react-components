import React from "react"; 


const EventSnippet = (props) => {

	const divStyle ={
		display: "inline-flex",
		padding: 20, 
		// margin: 10
		// border: "2px solid"
	}

	const imageStyle ={
		border: "2px solid", 
		backgroundColor: "red", 
		color: "white", 
		width: 150
	}

	const innerDivStyle = {
		display: "flex", 
		flexDirection: "column", 
		// border: "1px solid", 
		marginLeft: 20, 
		width: 200
	}

	const headingStyle={
		color: "red", 
		letterSpacing: 1, 
	}

	const paraStyle ={
		fontSize: 12
	}

	return (
		<div style={divStyle}>
			<div style={imageStyle}></div>
			<div style={innerDivStyle}>
				<h4 style={headingStyle}>{props.heading}</h4>
				<p style={paraStyle}>{props.description}</p>
			</div>
		</div>
	)
}


export default EventSnippet; 

