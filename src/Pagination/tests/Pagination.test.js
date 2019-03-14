import React from 'react';
import { shallow } from "enzyme";
import Pagination from '../Pagination';

describe('<Pagination />', () => {

  const props = {
    page: 1,
    handlePageChange: jest.fn(),
    totalNumberOfProducts: 48,
    resultsPerPage: 10
  }

  it('getPageNumbers should get all possible pagination numbers and save them in the state', () => {
    const renderedComponent = shallow(<Pagination {...props} />);
    const componentInstance = renderedComponent.instance()
    expect(componentInstance.getPageNumbers(48, 10)).toEqual([1, 2, 3, 4, 5])
    expect(componentInstance.state.pageNumbers).toEqual([1, 2, 3, 4, 5])
  });

  it('updateNumbersToDisplay should set numbers to display in pagination in the state', () => {
    const renderedComponent = shallow(<Pagination {...props} />);
    const componentInstance = renderedComponent.instance()
    componentInstance.updateNumbersToDisplay([1, 2, 3, 4, 5, 6], 1)
    expect(componentInstance.state.numbersToDisplay).toEqual([1, 2, 3, 6])
    componentInstance.updateNumbersToDisplay([1, 2, 3, 4, 5, 6, 8, 9, 10], 4)
    expect(componentInstance.state.numbersToDisplay).toEqual([1, 3, 4, 5, 10])
    componentInstance.updateNumbersToDisplay([1, 2, 3, 4, 5, 6, 8, 9, 10], 8)
    expect(componentInstance.state.numbersToDisplay).toEqual([1, 7, 8, 9, 10])
  });

  it('handleClick should call handlePageChange and update numbers to display', () => {
    const renderedComponent = shallow(<Pagination {...props} />);
    const componentInstance = renderedComponent.instance()
    jest.spyOn(componentInstance, 'updateNumbersToDisplay');
    componentInstance.handleClick(1)
    expect(props.handlePageChange).toHaveBeenCalledWith(1)
    expect(componentInstance.state.currentPage).toEqual(1)
    expect(componentInstance.updateNumbersToDisplay).toHaveBeenCalledWith([], 1)
  });

  it('should match snapshot with Ellipsis', () => {
    const renderedComponent = shallow(<Pagination {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should match snapshot without Ellipsis', () => {
    const props = {
      handlePageChange: jest.fn(),
      totalNumberOfProducts: 25,
      resultsPerPage: 10
    }
    const renderedComponent = shallow(<Pagination {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

});
