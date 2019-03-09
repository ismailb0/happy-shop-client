import React, { Component, Fragment } from 'react';

import CategoryList from '../CategoryList';
import PriceCategoryList from '../PriceCategoryList';

class Menu extends Component {

  render() {
    return (
      <Fragment>
        <CategoryList />
        <PriceCategoryList />
      </Fragment>
    );
  }
}

export default Menu;
