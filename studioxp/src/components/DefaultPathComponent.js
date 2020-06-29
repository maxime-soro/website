import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './MainComponent';

class DefaultPath extends Component {
  render() {
    return (
      <div>

      <Switch>
        <Route path="/studio" component={Main}  />
        <Redirect to="/studio"   />

      </Switch>



      </div>
    );
  }
}

export default DefaultPath;
