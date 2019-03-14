import React, { Component } from 'react';
import { getProducts } from "../utils/api";

import './ProductSelectionPage.css';
import Menu from '../Menu';
import Showcase from '../Showcase';


class ProductSelectionPage extends Component {
  _isMounted = false;

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
    this._isMounted = true;
    this.fetchData(this.state);
  }

  handleSortChange = (sortedBy) => {
    this.setState({
      sortedBy
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
      page: 1
    });
    this.fetchData({
      ...this.state,
      category,
      subcategory: null,
      subsubcategory: null,
      page: 1
    });
  }

  handleSubCategoryChange = (subcategory) => {
    this.setState({
      category: null,
      subcategory,
      subsubcategory: null,
      page: 1
    });
    this.fetchData({
      ...this.state,
      category: null,
      subcategory,
      subsubcategory: null,
      page: 1
    });
  }

  handleSubSubCategoryChange = (subsubcategory) => {
    this.setState({
      category: null,
      subcategory: null,
      subsubcategory,
      page: 1
    });
    this.fetchData({
      ...this.state,
      category: null,
      subcategory: null,
      subsubcategory,
      page: 1
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
       if (this._isMounted) {
         this.setState({ products: filteredProducts, count });
       }
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

  handlePageChange = (page) => {
    this.setState({ page });
    this.fetchData({
      ...this.state,
      page,
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
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
            handlePageChange={this.handlePageChange}
            handleResultsPerPageChange={this.handleResultsPerPageChange}
            handleSortChange={this.handleSortChange}
            page={this.state.page}
            products={this.state.products}
            totalNumberOfProducts={this.state.count}
            sortedBy={this.state.sortedBy}
            resultsPerPage={this.state.resultsPerPage}
          />
        </div>
      </div>
    );
  }
}

export default ProductSelectionPage;
