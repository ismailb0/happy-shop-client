import React, { Component } from 'react';

import './App.css';
import Menu from './Menu';
import Showcase from './Showcase';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Menu">
          <Menu />
        </div>
        <div className="Products">
          <Showcase />
        </div>
      </div>
    );
  }
}

export default App;
