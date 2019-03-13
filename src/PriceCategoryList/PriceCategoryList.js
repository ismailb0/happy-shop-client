import React from 'react';
import List from '@material-ui/core/List';
import { withStyles } from "@material-ui/core/styles";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 0,
    paddingBottom: 0,
  }
};


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
    const { classes } = this.props;

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
              role={undefined}
              onClick={this.handleClick(range)}
            >
              <Checkbox
                className={classes.root}
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

export default withStyles(styles)(PriceCategoryList);
