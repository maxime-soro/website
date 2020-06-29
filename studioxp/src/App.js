import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import DefaultPath from './components/DefaultPathComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <DefaultPath />
      </div>
  </BrowserRouter>
    );
  }
}

export default App;
