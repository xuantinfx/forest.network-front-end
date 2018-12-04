import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TinTest from './views/TinTest'
import ProfileTimeline from './components/ProfileTimeline';

class App extends Component {
  render() {
    return (
      <ProfileTimeline/>
    );
  }
}

export default App;
