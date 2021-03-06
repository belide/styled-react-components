import React from "react"; 

const ActionButton = (props) => {

	//default styling object
	const defaultActionButtonStyle = {
		width: 100, 
		borderRadius: 5, 
		cursor: "pointer", 
		margin: "15px 15px",  
		height: 40,  
		outline: "none", 
		backgroundColor: "yellow",
		border: "1px solid white", 
		padding: 10, 
		color: "black",
		fontSize:10, 
		fontWeight: "bold", 
		letterSpacing: 1
	}

	//call to action value on the submit button
	const value = () => {
		if(!props.value){
			return "SUBMIT"
		} else{
			return props.value
		}
	}


	//if style object is not present in the props
	//apply default button styling rules
	const style = () => {
		if(!props.style){
			return defaultActionButtonStyle; 
		} else{
			return props.style
		}
	}



	return( 
		<button style={style()} type="submit">{value()}</button>
	)
}


export default ActionButton; 


//Homework for ActionButton Component
//for creating a hover effect on button use an external style sheet or 
//styled component library such as MaterialUI or Radium or write functional
//mixins to manage state change and returning a new style object on mouse over
//event

