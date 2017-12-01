import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          Hello world
        </div>
        <footer className="App-footer">
          <img src={logo} className="App-logo" alt="logo" />
        </footer>
      </div>
    );
  }
}

export default App;
