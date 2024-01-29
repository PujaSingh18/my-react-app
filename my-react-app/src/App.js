import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends Component {
  render() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is Website Props</p> 
      </Greet>  
      <Greet name="Clark" heroName="Superman">
        <p>This is my </p> 
      </Greet>  
      <Greet name="Diana" heroName="Wonder Woman" /> 
      { /*<Welcome /> */}
      { /*<Hello /> */}
    </div>
  );
 }
}

export default App;
