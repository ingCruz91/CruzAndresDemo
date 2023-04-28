import React from 'react';
import {render} from '@testing-library/react-native';
import ProductName from '../../../src/components/Product/ProductPointsDetails/ProductName';

describe('ProductName component', () => {
  it('renders product name correctly', () => {
    const productName = 'Test Product';
    const {getByText} = render(<ProductName productName={productName} />);
    const productNameElement = getByText(productName);
    expect(productNameElement).toBeDefined();
  });
});
