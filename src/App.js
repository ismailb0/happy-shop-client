import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import ProductSelectionPage from './ProductSelectionPage';
import ProductPage from './ProductPage';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path={'/'} component={ProductSelectionPage} />
            <Route path={'/:id'} component={ProductPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
