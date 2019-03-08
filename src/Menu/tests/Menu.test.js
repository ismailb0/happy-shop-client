import React from 'react';
import Menu from '../Menu';

const ReactTestRenderer = require('react-test-renderer');

describe('<Menu />', () => {

  it('should match snapshot', () => {

    const component = ReactTestRenderer.create(
      <Menu />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
