import React, { Component, Fragment } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const MENU = {
  'Makeup': {
    'Cheek': [],
    'Face': [
      'Contouring',
      'Primer',
      'Tools',
      'Foundation',
      'Face Powder',
      'Cc & Bb Cream',
      'Concealer',
    ],
    'Eyes': [],
    'Lips': [],
    'Nails': [],
  }
};

class Menu extends Component {
  state = {
    'isMakeupOpen': false,
    'isCheekOpen': false,
    'isFaceOpen': false,
    'isEyesOpen': false,
    'isLipsOpen': false,
    'isNailsOpen': false
  };

  openItem = (itemName) => {
    this.setState({
      [`is${itemName}Open`]: !this.state[`is${itemName}Open`]
    });
  }

  getSubSubMenu = (subSubMenu) => {
    return (
      <List component="div" disablePadding>
        {
          subSubMenu.map((item) => {
            return (
              <ListItem key={item} button>
                <ListItemText inset primary={item} />
              </ListItem>
          )})
        }
      </List>
    )
  }

  getSubMenu = (subMenu) => {
    return (
      <List component="div" disablePadding>
        {
          Object.keys(subMenu).map((item) => {
            return (
              <Fragment key={item}>
                <ListItem key={item} button>
                  <ListItemText inset primary={item} onClick={() => this.openItem(item)} />
                  {subMenu[item].length !== 0 && (this.state[`is${item}Open`] ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                {subMenu[item].length !== 0 && (
                  <Collapse in={this.state[`is${item}Open`]} timeout="auto" unmountOnExit>
                    {this.getSubSubMenu(subMenu[item])}
                  </Collapse>
                )}
              </Fragment>
          )})
        }
      </List>
    )
  }

  getMenu = (menuObject) => {
    return (
      <List component="nav">
        {
          Object.keys(menuObject).map((item) => {
            return (
              <Fragment key={item}>
                <ListItem key={item} button>
                  <ListItemText inset primary={item} onClick={() => this.openItem(item)} />
                  {this.state[`is${item}Open`] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {Object.keys(menuObject[item]).length !== 0 && (
                  <Collapse
                    in={this.state[`is${item}Open`]}
                    timeout="auto"
                    unmountOnExit
                  >
                    {this.getSubMenu(menuObject[item])}
                  </Collapse>
                )}
              </Fragment>
            )
          })
        }
      </List>
    )
  }

  render() {
    return this.getMenu(MENU);
  }
}

export default Menu;
