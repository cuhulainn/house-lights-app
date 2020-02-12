import React, { Component } from 'react';
import './App.css';
//import { Home } from "./Home";
import { HomeContainer } from './HomeContainer';

class App extends Component {
  render() {
    return (
        <div className={'app-container'}>
            <HomeContainer/>
        </div>
    );
  }
}

export default App;
