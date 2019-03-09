import React, { Component, Fragment } from 'react';

import ShowcaseNavigationBar from '../ShowcaseNavigationBar';
import ProductShowcase from '../ProductShowcase';

class Showcase extends Component {

  render() {
    return (
      <Fragment>
        <ShowcaseNavigationBar />
        <ProductShowcase />
      </Fragment>
    );
  }
}

export default Showcase;
