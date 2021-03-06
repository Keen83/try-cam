import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main id="camera">
          <canvas id="camera--sensor"></canvas>
          <video id="camera--view" autoplay playsinline></video>
          <img src="//:0" alt="" id="camera--output" />
          <button id="camera--trigger">Take a picture</button>
        </main>
      </div>
    );
  }
}

export default App;
