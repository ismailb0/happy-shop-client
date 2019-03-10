import React, { Component } from 'react';

import './ProductSelectionPage.css';
import Menu from '../Menu';
import Showcase from '../Showcase';


class ProductSelectionPage extends Component {

  render() {
    return (
      <div>
        <div className="menu">
          <Menu />
        </div>
        <div className="product-selection-showcase">
          <Showcase />
        </div>
      </div>
    );
  }
}

export default ProductSelectionPage;
