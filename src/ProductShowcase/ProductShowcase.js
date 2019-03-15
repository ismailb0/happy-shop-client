import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ProductCard from '../ProductCard';
import './ProductShowcase.css';

class ProductShowcase extends Component {

  getProductRows = () => {
    const productRows = [];
    let startIndex = 0;
    let endIndex = 3;

    while (endIndex < this.props.products.length + 3) {
      const endSlice = (this.props.products.length - startIndex) < 3 ?  this.props.products.length : endIndex;
      const productRow = Array.prototype.slice.call(this.props.products, startIndex, endSlice)
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
        <div key={productRow[0].id} className='product-showcase-row'>
          {
            productRow.map((product) => {
              return (
                <Link
                  key={product.id}
                  to={{
                    pathname: `/product/${product.id}`,
                    state: { product }
                  }}
                  className='product-card-link'
                >
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    brand={product.brand}
                    name={product.name}
                    price={product.price}
                  />
                </Link>
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
        <div className='product-showcase'>
          {this.getProductCards()}
        </div>
      </div>
    );
  }
}

export default ProductShowcase;
