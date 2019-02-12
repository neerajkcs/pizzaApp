import 'react-native';
import React from 'react';
import { PatuaText } from '../StyledText';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<PatuaText>Snapshot test!</PatuaText>).toJSON();

  expect(tree).toMatchSnapshot();
});
