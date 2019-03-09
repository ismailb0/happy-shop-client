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
    start_price: 0,
    end_price: 25,
    label: 'Under 25$',
  },
  {
    start_price: 25,
    end_price: 50
  },
  {
    start_price: 50,
    end_price: 100
  },
  {
    start_price: 100,
    end_price: 150
  },
  {
    start_price: 150,
    end_price: 300,
  },
  {
    start_price: 300,
    end_price: 1000000000,
    label: 'Above 300$',
  },
]

class PriceCategoryList extends React.Component {
  state = {
    checked: [0],
    opened: false
  };

  openList = () => {
    this.setState ({
      opened: !this.state.opened
    })
  }

  handleToggle = value => () => {
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
  };

  render() {

    return (
      <List component="div">
        <ListItem button onClick={() => this.openList()}>
          <ListItemText inset primary='Price' />
          {this.state.opened ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={this.state.opened}
          timeout="auto"
          unmountOnExit
        >
          {RANGES.map(range => (
            <ListItem key={range.start_price} role={undefined} dense button onClick={this.handleToggle(range)}>
              <Checkbox
                checked={this.state.checked.indexOf(range) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText
                primary={range.label
                  ? range.label
                  :`${range.start_price}$ - ${range.end_price}$`
              } />
            </ListItem>
          ))}
        </Collapse>
      </List>
    );
  }
}

export default PriceCategoryList;
