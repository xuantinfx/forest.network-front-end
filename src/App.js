import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './containers/Banner'
import Profile from './containers/Profile'
import Follow from './containers/Follow'
import ProfileTimeline from './containers/ProfileTimeline';

import { requestApi } from './apis/requestApi'
import { postTranSaction } from './apis/transaction'
import { getTXBase64, encode, sign } from './lib/transaction'

class App extends Component {
  constructor(props) {
    super(props);

    let tx = {
      version: 1,
      account: "GDLLXAEH3MYZ3IYEE4JNVYPXXQDA5HY6JMVLU7UFNZJVY7CDVCURFED3",
      sequence: 10,
      memo: Buffer.alloc(0),
      operation: 'create_account',
      params: {
          address: "GAWXBPFTXZZ32X5BF3G56SEQFVY6OVPX646ULSMZKKUSNRT4IW47Y5JS"
      }
  }

  let txsign = sign(tx);
    requestApi(postTranSaction(getTXBase64(encode(txsign))))
    .then(res => {
        console.log('res', res);
    })
    .catch(err => { 
        console.log('err', err);
    })
}
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
                          <Route exact path="/followwings" component={Follow} />
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
