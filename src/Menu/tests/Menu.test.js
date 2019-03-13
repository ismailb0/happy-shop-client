import React from 'react';
import { shallow } from "enzyme";
import Menu from '../Menu';

describe('<Menu />', () => {

  const props = {
    handleCategoryChange: jest.fn(),
    handleSubCategoryChange: jest.fn(),
    handleSubSubCategoryChange: jest.fn(),
    handlePriceRangeChange: jest.fn(),
  }

  it('should match snapshot', () => {
    const renderedComponent = shallow(<Menu {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

});
