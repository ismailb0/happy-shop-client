import React, { Component } from 'react';

import './ShowcaseNavigationBar.css';
import Dropdown from '../Dropdown';

class ShowcaseNavigationBar extends Component {

SORT_CHOICES = [
  {
    label: 'Best Selling',
    value: 'best_selling',
  },
  {
    label: 'Price',
    value: 'price',
  },
]

PAGINATION_CHOICES = [
  {
    label: '10',
    value: 10,
  },
  {
    label: '30',
    value: 30,
  },
  {
    label: '50',
    value: 50,
  }
]

  render() {
    return (
      <div className="showcase-navigation">
        <Dropdown
          inputLabel="Sort By"
          defaultItem={this.SORT_CHOICES[0]}
          items={this.SORT_CHOICES}
        />
        <Dropdown
          inputLabel="View"
          defaultItem={this.PAGINATION_CHOICES[0]}
          items={this.PAGINATION_CHOICES}
        />
      </div>
    );
  }
}

export default ShowcaseNavigationBar;
