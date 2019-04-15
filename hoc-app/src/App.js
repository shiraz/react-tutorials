import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonOne from './components/ButtonOne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne disable />
      </div>
    );
  }
}

export default App;
