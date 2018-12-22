import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './containers/Navbar';
import ProfileView from './views/ProfileView';
import FeedView from './views/FeedView';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/profile/:address/:sublink?" component={ProfileView} />
            <Route exact path="/" component={FeedView} />
            <Redirect to="/"/>
          </Switch>
        </div >
      </Router>
    );
  }
}


export default App;
