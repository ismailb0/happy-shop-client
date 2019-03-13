import React from 'react';
import { shallow } from "enzyme";
import { unwrap } from "@material-ui/core/test-utils";
import PriceCategoryList from '../PriceCategoryList';

const ComponentNaked = unwrap(PriceCategoryList);

describe('<PriceCategoryList />', () => {

  const props = {
    handlePriceRangeChange: jest.fn()
  }

  it('updateProducts should get call handlePriceRangeChange with the minPrice, maxPrice and the checked price ranges', () => {
    const renderedComponent = shallow(<ComponentNaked classes={{}} {...props} />);
    const componentInstance = renderedComponent.instance()
    const checkedPriceRanges = [
      {
        startPrice: 100,
        endPrice: 500
      },
      {
        startPrice: 680,
        endPrice: 720
      },
    ]
    componentInstance.updateProducts(checkedPriceRanges)
    expect(props.handlePriceRangeChange).toHaveBeenCalledWith(100, 720, checkedPriceRanges)
  });

  it('handleClick should get add a price range to checked if it isnt already there or remove it', () => {
    const checkedRange = {
      startPrice: 680,
      endPrice: 720
    }
    const renderedComponent = shallow(<ComponentNaked classes={{}} {...props} />);
    const componentInstance = renderedComponent.instance()
    componentInstance.state.checked = []
    jest.spyOn(componentInstance, 'updateProducts');
    componentInstance.handleClick(checkedRange)
    componentInstance.state.checked = [checkedRange]
    componentInstance.handleClick(checkedRange)
    componentInstance.state.checked = []
  });

  it('openList should get toggle the price check list', () => {
    const renderedComponent = shallow(<ComponentNaked classes={{}} {...props} />);
    const componentInstance = renderedComponent.instance()
    componentInstance.state.opened = false
    jest.spyOn(componentInstance, 'openList');
    componentInstance.openList()
    componentInstance.state.opened = true
    componentInstance.openList()
    componentInstance.state.opened = false
  });

  it('should match snapshot', () => {
    const renderedComponent = shallow(<ComponentNaked classes={{}} {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

});
