import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import Routing from './components/Routes';

class App extends Component {
  render () {
    return (
      <>
      <Head/>
      <Routing/>
      </>
    )
  }
}
export default App