import React from 'react';
import ProductSelectionPage from '../ProductSelectionPage';

const ReactTestRenderer = require('react-test-renderer');

describe('<ProductSelectionPage />', () => {

  it('should match snapshot for ProductSelectionPage', () => {

    const component = ReactTestRenderer.create(
      <ProductSelectionPage />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
