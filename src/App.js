import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './containers/Banner'
import Profile from './containers/Profile'
import Follow from './containers/Follow'
import ProfileTimeline from './containers/ProfileTimeline';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div id="page-outer">
            <div id="page-container" className="AppContent">
              <Banner />
              <div className="AppContainer">
                <div className="AppContent-main content-main u-cf" role="main" aria-labelledby="content-main-heading">
                  <div className="Grid Grid--withGutter">
                    <Profile></Profile>
                    <div className="Grid-cell u-size2of3 u-lg-size3of4">
                      <div className="Grid Grid--withGutter">
                        <Switch>
                          <Route exact path="/followers" component={Follow} />
                          <Route exact path="/" component={ProfileTimeline} />
                        </Switch>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </Router>
    );
  }
}


export default App;
