import React from 'react';
import { shallow } from "enzyme";
import ProductCard from '../ProductCard';

describe('<ProductCard />', () => {

  const props = {
    image: 'testImage.jpg',
    name: 'testName',
    brand: 'testBrand',
    price: 59.82,
  }

  it('should match snapshot', () => {
    const renderedComponent = shallow(<ProductCard {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

});
