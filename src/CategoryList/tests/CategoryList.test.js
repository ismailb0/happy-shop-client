import React from 'react';
import { shallow } from "enzyme";
import CategoryList from '../CategoryList';

describe('<CategoryList />', () => {

  const props = {
    handleCategoryChange: jest.fn(),
    handleSubCategoryChange: jest.fn(),
    handleSubSubCategoryChange: jest.fn()
  }

  const category = {
    name: 'Face',
    isOpen: true,
    subCategories: [
      {
        name: 'Foundation',
        isOpen: false,
        subCategories: []
      },
      {
        name: 'Contour',
        isOpen: true,
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
  }

  it('closeAllSubCategories should close all subCategories of a parent Category', () => {

    const renderedComponent = shallow(<CategoryList {...props} />);
    const componentInstance = renderedComponent.instance()
    componentInstance.closeAllSubCategories(category)
    expect(props.handleCategoryChange).toHaveBeenCalledWith('Face')
    expect(componentInstance.state.categories[0].subCategories[0]).toEqual(
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
      }
    )
  });

  it('toggleSingleCategory should close only the given category', () => {

    const renderedComponent = shallow(<CategoryList {...props} />);
    const componentInstance = renderedComponent.instance()
    componentInstance.toggleSingleCategory('Contour', category)
    expect(props.handleSubCategoryChange).toHaveBeenCalledWith('Contour')
    console.log(componentInstance.state.categories[0].subCategories[0])
    expect(componentInstance.state.categories[0].subCategories[0]).toEqual(
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
      }
    )
  });

  it('handleItemSelection should call handleSubSubCategoryChange item is not a last-child category', () => {
    const renderedComponent = shallow(<CategoryList {...props} />);
    const componentInstance = renderedComponent.instance()
    componentInstance.handleItemSelection(category.subCategories[0])
    expect(props.handleSubSubCategoryChange).toHaveBeenCalledWith('Foundation')
  });

  it('handleItemSelection should call toggleItem item is a last-child category', () => {
    const renderedComponent = shallow(<CategoryList {...props} />);
    const componentInstance = renderedComponent.instance()
    jest.spyOn(componentInstance, 'toggleItem');
    componentInstance.handleItemSelection(category)
    expect(componentInstance.toggleItem).toHaveBeenCalledWith('Face')
  });

  it('toggleItem should call closeAllSubCategories if the category is a parent and is open', () => {
    const renderedComponent = shallow(<CategoryList {...props} />);
    const componentInstance = renderedComponent.instance()
    let allCategories = componentInstance.state.categories
    allCategories[0].isOpen = true
    jest.spyOn(componentInstance, 'closeAllSubCategories');
    componentInstance.toggleItem('Makeup')
    expect(componentInstance.closeAllSubCategories).toHaveBeenCalledWith(allCategories[0])
  });

  it('toggleItem should call toggleSingleCategory if the category is not a parent one', () => {
    const renderedComponent = shallow(<CategoryList {...props} />);
    const componentInstance = renderedComponent.instance()
    let allCategories = componentInstance.state.categories
    allCategories[0].subCategories[0].isOpen = true
    jest.spyOn(componentInstance, 'toggleSingleCategory');
    componentInstance.toggleItem('Face')
    expect(componentInstance.toggleSingleCategory).toHaveBeenCalledWith('Face', allCategories[0])
  });

  it('should match snapshot', () => {
    const renderedComponent = shallow(<CategoryList {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

});
