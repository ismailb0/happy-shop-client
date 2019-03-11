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
    sorted: false,
    products: []
  }

  componentDidMount() {
    this.fetchData(
      this.state.startPrice,
      this.state.endPrice,
      this.state.category,
      this.state.subcategory,
      this.state.subsubcategory,
      this.state.pagination,
      this.state.page,
      this.state.resultsPerPage,
      this.state.sorted
    );
  }

  handleSortChange = (sorted) => {
    const isSortedByPrice = sorted === 'price';
    this.setState({
      sorted: isSortedByPrice
    });
    this.fetchData(
      this.state.startPrice,
      this.state.endPrice,
      this.state.category,
      this.state.subcategory,
      this.state.subsubcategory,
      this.state.pagination,
      this.state.page,
      this.state.resultsPerPage,
      isSortedByPrice
    );
  }

  handleResultsPerPageChange = (resultsPerPage) => {
    this.setState({ resultsPerPage });
    this.fetchData(
      this.state.startPrice,
      this.state.endPrice,
      this.state.category,
      this.state.subcategory,
      this.state.subsubcategory,
      this.state.pagination,
      this.state.page,
      resultsPerPage,
      this.state.sorted
    );
  }

  fetchData = (
    startPrice,
    endPrice,
    category,
    subcategory,
    subsubcategory,
    pagination,
    page,
    resultsPerPage,
    sorted
  ) => {
    getProducts(
      startPrice,
      endPrice,
      category,
      subcategory,
      subsubcategory,
      pagination,
      page,
      resultsPerPage,
      sorted
    )
    .then(products => {
      if (products) {
        this.setState({ products });
      }
    })
    .catch(error => {
      console.error(error);
      this.setErrorMessage("Failed to get logs data.");
    })
  };

  render() {
    return (
      <div>
        <div className="menu">
          <Menu />
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
