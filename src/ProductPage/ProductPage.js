import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import ArrowBack from '@material-ui/icons/ArrowBack';

import './ProductPage.css';

const styles = theme => ({
  card: {
    maxWidth: 600,
    maxHeight: 600,
  },
  media: {
    height: "auto",
    maxHeight: "400px",
    width: "auto",
    maxWidth: "600px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
});

function ProductPage({ location, classes }) {

  const { state: { product } } = location;

  return (
    <div className="product-page-wrapper">
      <div className='back-button'>
        <Link to="/">
          <ArrowBack />
        </Link>
      </div>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <div className="card-page-content">
          <div className='product-brand'>
            {product.brand}
          </div>
          <div>
            {product.name}
          </div>
          <div className='product-price'>
            {`$${product.price}`}
          </div>
          <div>
            {product.description}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default withStyles(styles)(ProductPage);
