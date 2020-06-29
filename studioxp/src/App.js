import React, { Component } from 'react';
import './App.css';
import DefaultPath from './components/DefaultPathComponent';
import { BrowserRouter } from 'react-router-dom';
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
