import React, { Component } from 'react';

import ShowcaseNavigationBar from '../ShowcaseNavigationBar';
import ProductShowcase from '../ProductShowcase';
import './Showcase.css';

class Showcase extends Component {

  render() {
    return (
      <div className="showcase">
        <ShowcaseNavigationBar />
        <ProductShowcase />
      </div>
    );
  }
}

export default Showcase;
