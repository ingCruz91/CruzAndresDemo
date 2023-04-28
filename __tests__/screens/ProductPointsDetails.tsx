import React from 'react';
import {render} from '@testing-library/react-native';
import ProductPointsDetails from '../../src/screens/ProductPointsDetails';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../src/navigation/Navigation';

const route: RouteProp<RootStackParamList, 'ProductPointsDetails'> = {
  params: {
    productName: 'string',
    productCreatedAt: 'string',
    productPoints: 0,
    productImage: 'string',
  },
  key: '123',
  name: 'ProductPointsDetails',
  path: '../src/screens/ProductPointsDetails',
};

describe('ProductPointsDetails', () => {
  it('renders ProductPointsDetails correctly', () => {
    const {toJSON} = render(
      <NavigationContainer>
        <ProductPointsDetails route={route} />
      </NavigationContainer>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
