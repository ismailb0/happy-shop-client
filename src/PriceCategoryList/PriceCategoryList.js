import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import './PriceCategoryList.css';

const RANGES = [
  {
    startPrice: 0,
    endPrice: 100,
    label: 'Under 100$',
  },
  {
    startPrice: 100,
    endPrice: 500
  },
  {
    startPrice: 500,
    endPrice: 680
  },
  {
    startPrice: 680,
    endPrice: 720
  },
  {
    startPrice: 720,
    endPrice: 900,
  },
  {
    startPrice: 900,
    endPrice: 1000000000,
    label: 'Above 900',
  },
]

class PriceCategoryList extends React.Component {
  state = {
    checked: [],
    opened: false
  };

  openList = () => {
    this.setState ({
      opened: !this.state.opened
    })
  }

  updateProducts = (checkedPriceRanges) => {
    let minPrice = Math.min.apply(Math, checkedPriceRanges.map((priceRange) => priceRange.startPrice));
    let maxPrice = Math.max.apply(Math, checkedPriceRanges.map((priceRange) => priceRange.endPrice));

    if(minPrice === Infinity) {
      minPrice = null
    }
    if(maxPrice === -Infinity) {
      maxPrice = null
    }

    this.props.handlePriceRangeChange(minPrice, maxPrice, checkedPriceRanges)
  }

  handleClick = value => () => {
    console.log(value, "range")
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
    this.updateProducts(newChecked)
  };

  render() {

    return (
      <List component="div">
        <ListItem button onClick={() => this.openList()}>
          <ListItemText
            inset
            primary={
              <div className='menu-item-text' >Price</div>
            }
          />
          {this.state.opened ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={this.state.opened}
          timeout="auto"
          unmountOnExit
        >
          {RANGES.map(range => (
            <ListItem
              key={range.startPrice}
              disablePadding
              role={undefined}
              dense
              button
              onClick={this.handleClick(range)}
            >
              <Checkbox
                checked={this.state.checked.indexOf(range) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText
                primary={range.label
                  ? range.label
                  :`${range.startPrice}$ - ${range.endPrice}$`
              } />
            </ListItem>
          ))}
        </Collapse>
      </List>
    );
  }
}

export default PriceCategoryList;
