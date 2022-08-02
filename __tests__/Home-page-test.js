import 'react-native';
import React from 'react';
import Home from '../src/Pages/DetailsScreen/DetailsScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
      <DetailsScreen />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });