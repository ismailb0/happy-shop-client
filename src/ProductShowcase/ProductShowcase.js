import React, { Component } from 'react';

import ProductCard from '../ProductCard';
import './ProductShowcase.css';
import reptile from './static/contemplative-reptile.jpg';
import { PRODUCTS } from '../constants.js'

class ProductShowcase extends Component {

  getProductRows = () => {
    const productRows = [];
    let startIndex = 0;
    let endIndex = 3;

    while (endIndex < PRODUCTS.length + 3) {
      const endSlice = (PRODUCTS.length - startIndex) < 3 ?  PRODUCTS.length : endIndex;
      // productRow.push(PRODUCTS.slice(startIndex, endSlice))
      const productRow = Array.prototype.slice.call(PRODUCTS, startIndex, endSlice)
      productRows.push(productRow)
      startIndex += 3;
      endIndex += 3;
    }
    return Array.from(productRows);
  }

  getProductCards = () => {
    const productRows = this.getProductRows()
    return productRows.map((productRow) => {
      return (
        <div className='product-showcase-row'>
          {
            productRow.map((product) => {
              return (
                <ProductCard
                  key={product.productName}
                  image={reptile}
                  title={product.title}
                  productBrand={product.productBrand}
                  productName={product.productName}
                  productPrice={product.productPrice}
                />
              );
            })
          }
        </div>
      );
    })
  }

  render() {
    return (
      <div className='product-showcase-wrapper'>
        {this.getProductCards()}
      </div>
    );
  }
}

export default ProductShowcase;
