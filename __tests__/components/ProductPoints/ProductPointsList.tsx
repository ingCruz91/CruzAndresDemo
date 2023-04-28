import React from 'react';
import {render} from '@testing-library/react-native';
import ProductPointsList from '../../../src/components/Product/ProductPoints/ProductPointsList';
import {NavigationContainer} from '@react-navigation/native';
import {PRODUCT_LABELS} from '../../../src/Utils/constants';

describe('ProductPointsList', () => {
  it('renders the list correctly', () => {
    const testData = [
      {
        createdAt: '2022-12-09T10:20:00.909Z',
        product: 'Fantastic Granite Bacon',
        points: 42416,
        image: 'https://loremflickr.com/640/480/technics',
        is_redemption: false,
        id: '3',
      },
    ];

    const {getByText, getByTestId} = render(
      <NavigationContainer>
        <ProductPointsList data={testData} />
      </NavigationContainer>,
    );

    expect(getByText(PRODUCT_LABELS.MOVIMIENTOS)).toBeDefined();
    expect(getByTestId('flatListTest')).toBeDefined();
  });
  it(' renders empty list without error', () => {
    const {getByText, queryByTestId} = render(
      <NavigationContainer>
        <ProductPointsList data={[]} />
      </NavigationContainer>,
    );

    expect(getByText(PRODUCT_LABELS.MOVIMIENTOS)).toBeDefined();
    expect(queryByTestId('flatListTest')).toBeTruthy();
  });
});
