import React from 'react';
import { shallow } from "enzyme";
import ProductSelectionPage from '../ProductSelectionPage';

const ReactTestRenderer = require('react-test-renderer');

describe('<ProductSelectionPage />', () => {

  it('handleSortChange set sortedBy in the state and call fetch data', () => {
    const renderedComponent = shallow(<ProductSelectionPage />);
    const componentInstance = renderedComponent.instance()
    jest.spyOn(componentInstance, 'fetchData');
    componentInstance.state.sortedBy = 'best_selling'
    componentInstance.handleSortChange('price')
    expect(componentInstance.state.sortedBy).toEqual('price')
    expect(componentInstance.fetchData).toHaveBeenCalledWith({
      ...componentInstance.state,
      sortedBy: 'price'
    })
  });

  it('handleCategoryChange set category in the state and call fetch data', () => {
    const renderedComponent = shallow(<ProductSelectionPage />);
    const componentInstance = renderedComponent.instance()
    jest.spyOn(componentInstance, 'fetchData');
    componentInstance.state.category = 'Perfume'
    componentInstance.handleCategoryChange('Makeup')
    expect(componentInstance.state.category).toEqual('Makeup')
    expect(componentInstance.fetchData).toHaveBeenCalledWith({
      ...componentInstance.state,
      category: 'Makeup',
      subcategory: null,
      subsubcategory: null,
    })
  });

  it('handleSubCategoryChange set subcategory in the state and call fetch data', () => {
    const renderedComponent = shallow(<ProductSelectionPage />);
    const componentInstance = renderedComponent.instance()
    jest.spyOn(componentInstance, 'fetchData');
    componentInstance.state.subcategory = 'Lips'
    componentInstance.handleSubCategoryChange('Face')
    expect(componentInstance.state.subcategory).toEqual('Face')
    expect(componentInstance.fetchData).toHaveBeenCalledWith({
      ...componentInstance.state,
      category: null,
      subcategory: 'Face',
      subsubcategory: null,
    })
  });

  it('handleSubSubCategoryChange set subsubcategory in the state and call fetch data', () => {
    const renderedComponent = shallow(<ProductSelectionPage />);
    const componentInstance = renderedComponent.instance()
    jest.spyOn(componentInstance, 'fetchData');
    componentInstance.state.subsubcategory = 'Eyebrows'
    componentInstance.handleSubSubCategoryChange('Nail Art')
    expect(componentInstance.state.subsubcategory).toEqual('Nail Art')
    expect(componentInstance.fetchData).toHaveBeenCalledWith({
      ...componentInstance.state,
      category: null,
      subcategory: null,
      subsubcategory: 'Nail Art',
    })
  });

  it('handleResultsPerPageChange set resultsPerPage in the state and call fetch data', () => {
    const renderedComponent = shallow(<ProductSelectionPage />);
    const componentInstance = renderedComponent.instance()
    jest.spyOn(componentInstance, 'fetchData');
    componentInstance.state.resultsPerPage = 12
    componentInstance.handleResultsPerPageChange(10)
    expect(componentInstance.state.resultsPerPage).toEqual(10)
    expect(componentInstance.fetchData).toHaveBeenCalledWith({
      ...componentInstance.state,
      resultsPerPage: 10
    })
  });

  it('handlePriceRangeChange set startPrice and endPrice in the state and call fetch data', () => {
    const renderedComponent = shallow(<ProductSelectionPage />);
    const componentInstance = renderedComponent.instance()
    jest.spyOn(componentInstance, 'fetchData');
    componentInstance.state.startPrice = 0
    componentInstance.state.endPrice = 2
    componentInstance.state.priceRanges = []
    const priceRanges = [{
        startPrice: 10,
        endPrice: 15
      },
      {
        startPrice: 20,
        endPrice: 1000
      }
    ]
    componentInstance.handlePriceRangeChange(10, 1000, priceRanges)
    expect(componentInstance.state.startPrice).toEqual(10)
    expect(componentInstance.state.endPrice).toEqual(1000)
    expect(componentInstance.state.priceRanges).toEqual(priceRanges)
    expect(componentInstance.fetchData).toHaveBeenCalledWith({
      ...componentInstance.state,
      startPrice: 10,
      endPrice: 1000,
    })
  });

  it('handlePageChange set the page in the state and call fetch data', () => {
    const renderedComponent = shallow(<ProductSelectionPage />);
    const componentInstance = renderedComponent.instance()
    jest.spyOn(componentInstance, 'fetchData');
    componentInstance.state.page = 1
    componentInstance.handlePageChange(3)
    expect(componentInstance.state.page).toEqual(3)
    expect(componentInstance.fetchData).toHaveBeenCalledWith({
      ...componentInstance.state,
      page: 3
    })
  });

  it('should match snapshot for ProductSelectionPage', () => {

    const component = ReactTestRenderer.create(
      <ProductSelectionPage />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
