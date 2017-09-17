import React, { Component } from 'react';
import './App.css';
import ActionButton from "./Components/ActionButton.js"; 
import EventSnippet from "./Components/EventSnippet.js"; 
import SearchBar from "./Components/SearchBar.js"; 
// import ImageCard from "./Components/ImageCard.js"; 

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
    backgroundColor: "white",
    border: "1px solid", 
    padding: 10, 
    color: "black",
    fontSize:10, 
    fontWeight: "bold", 
    letterSpacing: 1
  }

  const eventSnippetOne = {
    heading: "Flavors Culinary Programs", 
    description: "Support the American Liver Foundation by dining at a 'Flavors' event near you"
  }

  const eventSnippetTwo ={
    heading: "Liver Life Walk", 
    description: "Raise money and walk to support the American Liver Foundation. Find a walk near you"
  }




    return (
      <div className="app">

        <h1 className="header">ActionButton</h1>
        <ActionButton/>
        <ActionButton style={greyButton}/>
        <ActionButton value ="LETS GO!" style={redButton}/>
        <ActionButton value ="Oh Yeah!" style={borderButton}/>

        <h1 className="header">EventSnippet</h1>
        <EventSnippet heading={eventSnippetOne.heading} description={eventSnippetOne.description}/>
        <EventSnippet heading={eventSnippetTwo.heading} description={eventSnippetTwo.description}/>

        <h1 className="header">SearchBar</h1>
        <SearchBar/>

      </div>
      )
  }
}

export default App;
