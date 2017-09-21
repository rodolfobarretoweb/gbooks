import React from 'react';
import Input from '../../src/components/input';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Input type = 'search' label = 'field'/>
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});
