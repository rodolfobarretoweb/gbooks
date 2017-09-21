import React from 'react';
import Load from '../../src/components/load';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Load show/>).toJSON();
  expect(tree).toMatchSnapshot();
});
