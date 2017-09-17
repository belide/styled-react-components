import React from "react"; 

const SearchBar = () => {

	const inputStyle ={
	  marginTop: 10, 
	  color: "#885ead", 
	  outline: 0, 
	  borderWidth: "0px 0px 3px 0px", 
	  borderColor: "black", 
	  background:"none", 
	  width: "30%", 
	  fontSize: 15, 
	  letterSpacing: 2, 
	  textAlign: "center", 
	  padding: "0px 0px 5px 0px", 
	}

	const searchIconStyle = {
	  color: "#885ead",  
	  border: 0,  
	  background: "transparent", 
	  marginBottom: 20, 
	  padding: 0, 
	  outline: 0, 
	}


	return(
		<form action="#" method="post">
			<i style={searchIconStyle} class="fa fa-search" aria-hidden="true"></i>
		    <input style={inputStyle} autocomplete="off" type="text" id="search" placeholder="Search" autofocus/> 
		</form>
	)
}


export default SearchBar; 