import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './MainComponent';
import HomePage from './HomePageComponent';



class DefaultPath extends Component {
  render() {
    return (
      <div>

      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/studio" component={Main}  />
        <Redirect to="/home"   />

      </Switch>



      </div>
    );
  }
}

export default DefaultPath;
