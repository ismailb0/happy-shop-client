import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import ArrowBack from '@material-ui/icons/ArrowBack';

import './ProductPage.css';

function ProductPage({ match, location }) {

  const { state: { product } } = location;

  return (
    <div className="product-page-wrapper">
      <div className='back-button'>
        <Link to="/">
          <ArrowBack />
        </Link>
      </div>
      <Card className='product-info-wrapper'>
        <CardMedia
          className="card-media"
          image={product.image}
          title={product.title}
        />
        <div className="card-page-content">
          <div className='product-brand'>
            {product.productBrand}
          </div>
          <div>
            {product.productName}
          </div>
          <div className='product-price'>
            {`$${product.productPrice}`}
          </div>
          <div>
            {product.productDescription}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductPage;
