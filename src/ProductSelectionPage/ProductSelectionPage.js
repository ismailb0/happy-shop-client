import React, { Component } from 'react';
import { getProducts } from "../utils/api";

import './ProductSelectionPage.css';
import Menu from '../Menu';
import Showcase from '../Showcase';


class ProductSelectionPage extends Component {

  state = {
    startPrice: null,
    endPrice: null,
    category: 'Makeup',
    subcategory: null,
    subsubcategory: null,
    pagination: true,
    page: 1,
    resultsPerPage: 10,
    sortedBy: "best_selling",
    products: [],
    priceRanges: [],
    count: 0
  }

  componentDidMount() {
    this.fetchData(this.state);
  }

  handleSortChange = (sortedBy) => {
    this.setState({
      sorted: sortedBy
    });
    this.fetchData({
      ...this.state,
      sortedBy
    });
  }

  handleCategoryChange = (category) => {
    this.setState({
      category,
      subcategory: null,
      subsubcategory: null,
    });
    this.fetchData({
      ...this.state,
      category,
      subcategory: null,
      subsubcategory: null,
    });
  }

  handleSubCategoryChange = (subcategory) => {
    this.setState({
      category: null,
      subcategory,
      subsubcategory: null,
    });
    this.fetchData({
      ...this.state,
      category: null,
      subcategory,
      subsubcategory: null,
    });
  }

  handleSubSubCategoryChange = (subsubcategory) => {
    this.setState({
      category: null,
      subcategory: null,
      subsubcategory,
    });
    this.fetchData({
      ...this.state,
      category: null,
      subcategory: null,
      subsubcategory,
    });
  }

  handleResultsPerPageChange = (resultsPerPage) => {
    this.setState({ resultsPerPage });
    this.fetchData({
      ...this.state,
      resultsPerPage
    });
  }

  fetchData = (parameters) => {
    getProducts(
      parameters.startPrice,
      parameters.endPrice,
      parameters.category,
      parameters.subcategory,
      parameters.subsubcategory,
      parameters.pagination,
      parameters.page,
      parameters.resultsPerPage,
      parameters.sortedBy
    )
    .then(response => {
      const products = response.products
      const count = response.count
      if (products) {
        let filteredProducts = products
        if (this.state.startPrice !== null && this.state.endPrice !== null) {
          filteredProducts = filteredProducts.filter((product) => {
            let shouldProductBeKept = false;
            this.state.priceRanges.forEach((priceRange) => {
              if (product.price >= priceRange.startPrice && product.price <= priceRange.endPrice) {
                shouldProductBeKept = true
              }
            })
            return shouldProductBeKept
          })
        }

        this.setState({ products: filteredProducts, count });
      }
    })
    .catch(error => {
      console.error(error);
      this.setErrorMessage("Failed to get logs data.");
    })
  };

  handlePriceRangeChange = (startPrice, endPrice, priceRanges) => {
    this.setState({ startPrice, endPrice, priceRanges });
    this.fetchData({
      ...this.state,
      startPrice,
      endPrice,
    });
  }

  render() {
    return (
      <div>
        <div className="menu">
          <Menu
            handlePriceRangeChange={this.handlePriceRangeChange}
            handleCategoryChange={this.handleCategoryChange}
            handleSubCategoryChange={this.handleSubCategoryChange}
            handleSubSubCategoryChange={this.handleSubSubCategoryChange}
          />
        </div>
        <div className="product-selection-showcase">
          <Showcase
            products={this.state.products}
            handleResultsPerPageChange={this.handleResultsPerPageChange}
            handleSortChange={this.handleSortChange}
          />
        </div>
      </div>
    );
  }
}

export default ProductSelectionPage;
