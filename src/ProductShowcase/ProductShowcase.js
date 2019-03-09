import React, { Component } from 'react';

import ProductCard from '../ProductCard';
import './ProductShowcase.css';
import reptile from './static/contemplative-reptile.jpg';

class ProductShowcase extends Component {

  render() {
    return (
      <div className='product-showcase-wrapper'>
        <div className='product-showcase-row'>
          <ProductCard
            image={reptile}
            title="Contemplative Reptile"
            productBrand="KAT VON D"
            productName="Lock-it Foundation"
            productPrice={56.00}
          />
          <ProductCard
            image={reptile}
            title="Contemplative Reptile"
            productBrand="KAT VON D"
            productName="Lock-it Foundation"
            productPrice={56.00}
          />
          <ProductCard
            image={reptile}
            title="Contemplative Reptile"
            productBrand="KAT VON D"
            productName="Lock-it Foundation"
            productPrice={56.00}
          />
        </div>
        <div className='product-showcase-row'>
          <ProductCard
            image={reptile}
            title="Contemplative Reptile"
            productBrand="KAT VON D"
            productName="Lock-it Foundation"
            productPrice={56.00}
          />
          <ProductCard
            image={reptile}
            title="Contemplative Reptile"
            productBrand="KAT VON D"
            productName="Lock-it Foundation"
            productPrice={56.00}
          />
          <ProductCard
            image={reptile}
            title="Contemplative Reptile"
            productBrand="KAT VON D"
            productName="Lock-it Foundation"
            productPrice={56.00}
          />
        </div>
        <div className='product-showcase-row'>
          <ProductCard
            image={reptile}
            title="Contemplative Reptile"
            productBrand="KAT VON D"
            productName="Lock-it Foundation"
            productPrice={56.00}
          />
          <ProductCard
            image={reptile}
            title="Contemplative Reptile"
            productBrand="KAT VON D"
            productName="Lock-it Foundation"
            productPrice={56.00}
          />
          <ProductCard
            image={reptile}
            title="Contemplative Reptile"
            productBrand="KAT VON D"
            productName="Lock-it Foundation"
            productPrice={56.00}
          />
        </div>
      </div>
    );
  }
}

export default ProductShowcase;
