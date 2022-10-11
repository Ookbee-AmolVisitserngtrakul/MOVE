import React, { Component } from 'react';
import './App.css';
import Header from './components/Head';
import Routing from './components/Routes';
import Footer from './components/Foot';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routing />
        <Footer />
      </>
    )
  }
}
export default App