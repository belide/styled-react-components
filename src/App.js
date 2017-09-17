import React, { Component } from 'react';
import './App.css';
import ActionButton from "./Components/ActionButton.js"; 

class App extends Component {


  render(){

    const greyButton = {
    width: 100, 
    borderRadius: 5, 
    cursor: "pointer", 
    margin: "15px 15px",  
    height: 40,  
    outline: "none", 
    backgroundColor: "#365264",
    border: "1px solid white", 
    padding: 10, 
    color: "white",
    fontSize:10, 
    fontWeight: "bold", 
    letterSpacing: 1
  }

    const redButton = {
    width: 100, 
    borderRadius: 5, 
    cursor: "pointer", 
    margin: "15px 15px",  
    height: 40,  
    outline: "none", 
    backgroundColor: "red",
    border: "1px solid white", 
    padding: 10, 
    color: "white",
    fontSize:10, 
    fontWeight: "bold", 
    letterSpacing: 1
  }

    const borderButton = {
    width: 100, 
    borderRadius: 5, 
    cursor: "pointer", 
    margin: "15px 15px",  
    height: 40,  
    outline: "none", 
    backgroundColor: "red",
    border: "1px solid white", 
    padding: 10, 
    color: "white",
    fontSize:10, 
    fontWeight: "bold", 
    letterSpacing: 1
  }




    return (
      <div className="app">
        <ActionButton/>
        <ActionButton style={greyButton}/>
        <ActionButton value ="LETS GO!" style={redButton}/>
        <ActionButton value ="Oh Yeah!" style={borderButton}/>
      </div>
      )
  }
}

export default App;
