import React, { Component } from 'react';

import ShowcaseNavigationBar from '../ShowcaseNavigationBar';
import ProductShowcase from '../ProductShowcase';
import './Showcase.css';

class Showcase extends Component {

  render() {
    return (
      <div className="showcase">
        <ShowcaseNavigationBar
          handleResultsPerPageChange={this.props.handleResultsPerPageChange}
          handleSortChange={this.props.handleSortChange}
        />
        <ProductShowcase
          products={this.props.products}
        />
      </div>
    );
  }
}

export default Showcase;
