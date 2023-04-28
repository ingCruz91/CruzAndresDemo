import React from 'react';
import {render} from '@testing-library/react-native';

import ProductImage from '../../../src/components/Product/ProductPointsDetails/ProductImage';

describe('ProductImage', () => {
  const imageTest = 'https://example.com/product-image.jpg';

  it('renders the product image', () => {
    const {getByTestId} = render(<ProductImage productImage={imageTest} />);
    const productImage = getByTestId('productImage');
    expect(productImage).not.toBeNull();
  });
});
