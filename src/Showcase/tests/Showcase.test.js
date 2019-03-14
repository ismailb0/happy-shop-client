import React from 'react';
import { shallow } from "enzyme";
import Showcase from '../Showcase';

describe('<Showcase />', () => {

  const props = {
    handlePageChange: jest.fn(),
    handleResultsPerPageChange: jest.fn(),
    handleSortChange: jest.fn(),
    sortedBy: 'price',
    resultsPerPage: 15,
    totalNumberOfProducts: 400,
    page: 1,
    products: [
      {
        brand: "Sephora Collection",
        description: "A gel lip gloss with plumped-up, light-reflecting shine.\r\n",
        image: "https://static-reg.lximg.com/images/product_images/closeup_34208_SephoraCollection_UltraShineLipGel_01PerfectNude_WEB_a0ea7cca39eec787b338105af4ff4a85097902bf_1523780022.png",
        name: "Ultra Shine Lip Gel",
        price: 19.0
      },
      {
        brand: "My Awesome Brand",
        description: "Awesome Description",
        image: "https://static-reg.lximg.com/images/product_images/closeup_34208_SephoraCollection_UltraShineLipGel_01PerfectNude_WEB_a0ea7cca39eec787b338105af4ff4a85097902bf_1523780022.png",
        name: "Awesome Name",
        price: 91.0
      },
    ]
  }

  it('should match snapshot', () => {
    const renderedComponent = shallow(<Showcase {...props} />);
    expect(renderedComponent).toMatchSnapshot();
  });

});
