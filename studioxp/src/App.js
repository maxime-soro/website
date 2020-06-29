import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { StaticRouter, Router, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import DefaultPath from './components/DefaultPathComponent';
import { createBrowserHistory } from 'history';


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
