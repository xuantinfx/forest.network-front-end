import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './containers/Navbar';
import ProfileView from './views/ProfileView';
import FeedView from './views/FeedView';
import Alerts from './containers/Alerts';
import Socket from './containers/Socket';
import Spinner from './containers/Spinner';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Spinner />
          <Navbar />
          <Socket />
          <Switch>
            <Route exact path="/profile/:address/:sublink?" component={ProfileView} />
            <Route exact path="/" component={FeedView} />
            <Redirect to="/" />
          </Switch>
          <Alerts />
        </div >
      </Router>
    );
  }
}


export default App;
