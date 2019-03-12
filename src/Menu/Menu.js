import React, { Component } from 'react';

import CategoryList from '../CategoryList';
import PriceCategoryList from '../PriceCategoryList';

import './Menu.css';

class Menu extends Component {

  render() {
    return (
      <div className='menu-item-list'>
        <CategoryList
          handleCategoryChange={this.props.handleCategoryChange}
          handleSubCategoryChange={this.props.handleSubCategoryChange}
          handleSubSubCategoryChange={this.props.handleSubSubCategoryChange}
        />
        <PriceCategoryList />
      </div>
    );
  }
}

export default Menu;
