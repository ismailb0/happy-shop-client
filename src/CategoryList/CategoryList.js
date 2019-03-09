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

class CategoryList extends Component {
  state = {
    opened: [],
  };

  toggleItem = (itemName) => {
    const { opened } = this.state;

    const currentIndex = opened.indexOf(itemName);
    const newOpened = [...opened];

    if (currentIndex === -1) {
      newOpened.push(itemName);
    } else {
      newOpened.splice(currentIndex, 1);
    }

    this.setState({
      opened: newOpened,
    });
  }

  getSubSubCategoryList = (subSubCategoryList) => {
    return (
      <List component="div" disablePadding>
        {
          subSubCategoryList.map((item) => {
            return (
              <ListItem key={item} button>
                <ListItemText inset primary={item} />
              </ListItem>
          )})
        }
      </List>
    )
  }

  getSubCategoryList = (subCategoryList) => {
    return (
      <List component="div" disablePadding>
        {
          Object.keys(subCategoryList).map((item) => {
            return (
              <Fragment key={item}>
                <ListItem key={item} button onClick={() => this.toggleItem(item)} >
                  <ListItemText inset primary={item}/>
                  {subCategoryList[item].length !== 0 && (this.state.opened.includes(item) ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                {subCategoryList[item].length !== 0 && (
                  <Collapse in={this.state.opened.includes(item)} timeout="auto" unmountOnExit>
                    {this.getSubSubCategoryList(subCategoryList[item])}
                  </Collapse>
                )}
              </Fragment>
          )})
        }
      </List>
    )
  }

  getCategoryList = (menuObject) => {
    return (
      <List component="div" className='menuItemList'>
        {
          Object.keys(menuObject).map((item) => {
            return (
              <Fragment key={item}>
                <ListItem key={item} button onClick={() => this.toggleItem(item)}>
                  <ListItemText inset primary={item} />
                  {this.state.opened.includes(item) ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {Object.keys(menuObject[item]).length !== 0 && (
                  <Collapse
                    in={this.state.opened.includes(item)}
                    timeout="auto"
                    unmountOnExit
                  >
                    {this.getSubCategoryList(menuObject[item])}
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
    return this.getCategoryList(MENU);
  }
}

export default CategoryList;
