import React, { Component, Fragment } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import './CategoryList.css';

class CategoryList extends Component {

  state = {
    categories: [
      {
        name: 'Makeup',
        isOpen: false,
        subCategories: [
          {
            name: 'Face',
            isOpen: false,
            subCategories: [
              {
                name: 'Foundation',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Contour',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Blush',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Bronzer',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Powder',
                isOpen: false,
                subCategories: []
              },
            ]
          },
          {
            name: 'Eyes',
            isOpen: false,
            subCategories: [
              {
                name: 'Eye Liner',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Eye Shadow',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Eyebrows',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Mascare',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Eye Primer',
                isOpen: false,
                subCategories: []
              },
            ]
          },
          {
            name: 'Lips',
            isOpen: false,
            subCategories: [
              {
                name: 'Lipstick',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Lip Gloss',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Lip Liner',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Lip Balm',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Lip Primer',
                isOpen: false,
                subCategories: []
              },
            ]
          },
          {
            name: 'Nails',
            isOpen: false,
            subCategories: [
              {
                name: 'Nail Polish',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Nail Art',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Nail Sets',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Nail Treatments',
                isOpen: false,
                subCategories: []
              },
              {
                name: 'Base & Top Coat',
                isOpen: false,
                subCategories: []
              },
            ]
          },
        ]
      }
    ]
  }

  closeAllSubCategories = (category) => {
    const updatedCategories = this.state.categories
    const updatedCategory = category

    updatedCategory.isOpen = false
    updatedCategory.subCategories.forEach((element, index) => {
      element.isOpen = false
    })

    const categoryIndex = this.state.categories.findIndex(cat => cat.name === category.name);

    updatedCategories[categoryIndex] = updatedCategory

    this.setState({
      categories: updatedCategories,
    });
    this.props.handleCategoryChange(category.name)
  }

  toggleSingleCategory = (itemName, category) => {
    const updatedCategories = this.state.categories
    const updatedCategory = category

    if (category.name === itemName) {
      updatedCategory.isOpen = !updatedCategory.isOpen
      this.props.handleCategoryChange(itemName)
    } else {
      category.subCategories.forEach((element, index) => {
        if (element.name === itemName) {
          const subCategoryIndex = category.subCategories.findIndex(cat => cat.name === itemName)
          updatedCategory.subCategories[subCategoryIndex].isOpen = !element.isOpen
        }
      })
      this.props.handleSubCategoryChange(itemName)
    }

    const categoryIndex = this.state.categories.findIndex(cat => cat.name === category.name);

    updatedCategories[categoryIndex] = updatedCategory

    this.setState({
      categories: updatedCategories,
    });
  }

  handleItemSelection = (item) => {
    if (item.subCategories.length !== 0) {
        this.toggleItem(item.name)
    } else {
      this.props.handleSubSubCategoryChange(item.name)
    }
  }

  toggleItem = (itemName) => {
    const categories = this.state.categories;

    const parentItem = categories.find((category) => {
      const isItemNameInParentCategory = category.name === itemName;
      const isItemNameInChildCategory = category.subCategories.find((subcategory) => {
          return (subcategory.name === itemName);
      }) !== undefined;
      return isItemNameInParentCategory || isItemNameInChildCategory
    }, null)

    if (parentItem !== null) {
      if (itemName === parentItem.name && parentItem.isOpen === true) {
        this.closeAllSubCategories(parentItem)
      } else {
        this.toggleSingleCategory(itemName, parentItem)
      }
    }
  }

  getCategoryList = (menuObject) => {
    return (
      <div>
        <List component="div">
          {
            menuObject.map((item) => {
              return (
                <Fragment key={item.name}>
                  <ListItem key={item.name} button onClick={() => this.handleItemSelection(item)}>
                    <ListItemText
                      inset
                      disableTypography
                      primary={
                        <div className='menu-item-text' >{item.name}</div>
                      }
                    />
                    {item.subCategories.length !== 0 && (
                      item.isOpen ? <ExpandLess /> : <ExpandMore />
                    )}
                  </ListItem>
                  {item.subCategories.length !== 0 && (
                    <Collapse
                      in={item.isOpen}
                      timeout="auto"
                      unmountOnExit
                    >
                      {this.getCategoryList(item.subCategories)}
                    </Collapse>
                  )}
                </Fragment>
              )
            })
          }
        </List>
      </div>
    )
  }

  render() {
    return this.getCategoryList(this.state.categories);
  }
}

export default CategoryList;
