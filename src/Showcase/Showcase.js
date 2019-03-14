import React, { Component } from 'react';

import ShowcaseNavigationBar from '../ShowcaseNavigationBar';
import ProductShowcase from '../ProductShowcase';
import './Showcase.css';

class Showcase extends Component {

  render() {
    return (
      <div className="showcase">
        <ShowcaseNavigationBar
          handlePageChange={this.props.handlePageChange}
          handleResultsPerPageChange={this.props.handleResultsPerPageChange}
          handleSortChange={this.props.handleSortChange}
          page={this.props.page}
          resultsPerPage={this.props.resultsPerPage}
          sortedBy={this.props.sortedBy}
          totalNumberOfProducts={this.props.totalNumberOfProducts}
        />
        <ProductShowcase
          products={this.props.products}
        />
      </div>
    );
  }
}

export default Showcase;
