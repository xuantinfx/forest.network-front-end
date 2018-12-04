import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TinTest from './views/TinTest';
import ProfileEdit from './components/ProfileEdit/ProfileEdit';

class App extends Component {
  render() {
    return (
      <ProfileEdit></ProfileEdit>
    );
  }
}

export default App;
