import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import './ProductCard.css';

class ProductCard extends Component {

  render() {
    return (
      <Card className='product-card'>
        <CardMedia
          className="card-media"
          image={this.props.image}
          title="Contemplative Reptile"
        />
        <div className="card-content">
          <div className='product-brand'>
            {this.props.productBrand}
          </div>
          <div>
            {this.props.productName}
          </div>
          <div className='product-price'>
            {`$${this.props.productPrice}`}
          </div>
        </div>
      </Card>
    );
  }
}

export default ProductCard;
