import React from "react"; 
import ActionButton from "./ActionButton.js"; 
const image = require("../Data/doc.jpg"); 


const ImageCard = () => {

	const containerStyle = {
		background: `url(${image})`, 
		// border: "2px solid", 
		width: 350, 
		margin: "auto", 
		// border: "2px solid", 
		height: 450,
		position: "relative"

	}

	const overlayContainerStyle ={
		// border: "2px solid", 
		height: 150,
		width: "100%", 
		position: "absolute", 
		bottom: 0, 
		color: "white", 

	}

	

	return(
		<div style={containerStyle}>
			<div style={overlayContainerStyle}>
			    <ActionButton/>
			</div>
		</div>
	)
}


export default ImageCard; 



// <p>The main call to action of the Image Card component will come here</p>
// <ActionButton/>