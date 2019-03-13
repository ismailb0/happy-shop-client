import React from 'react';
import { shallow } from "enzyme";
import ShowcaseNavigationBar from '../ShowcaseNavigationBar';

describe('<ShowcaseNavigationBar />', () => {

  const props = {
    sortedBy: 'price',
    resultsPerPage: 10,
    handleSortChange: jest.fn(),
    handleResultsPerPageChange: jest.fn(),
    handlePageChange: jest.fn(),
    totalNumberOfProducts: 100,
  }

  it('getCurrentSortOption should return sort option currently selected', () => {
    const renderedComponent = shallow(<ShowcaseNavigationBar {...props} />);
    const componentInstance = renderedComponent.instance()
    expect(componentInstance.getCurrentSortOption()).toEqual({
        label: 'Price',
        value: 'price',
    })
  });

  it('getCurrentPaginationOption should return pagination option currently selected', () => {
    const renderedComponent = shallow(<ShowcaseNavigationBar {...props} />);
    const componentInstance = renderedComponent.instance()
    expect(componentInstance.getCurrentPaginationOption()).toEqual({
        label: '10',
        value: 10,
    })
  });

  it('should match snapshot', () => {
    const renderedComponent = shallow(<ShowcaseNavigationBar {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

});
