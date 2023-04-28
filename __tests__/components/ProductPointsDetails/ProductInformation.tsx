import React from 'react';
import {render} from '@testing-library/react-native';

import ProductInformation from '../../../src/components/Product/ProductPointsDetails/ProductInformation';
import {PRODUCT_LABELS} from '../../../src/Utils/constants';

describe('ProductInformation', () => {
  it('renders the product information', () => {
    const productCreatedAt = '2022-05-01';
    const productPoints = 500;

    const {getByText} = render(
      <ProductInformation
        productCreatedAt={productCreatedAt}
        productPoints={productPoints}
      />,
    );

    expect(getByText(PRODUCT_LABELS.DETALLES_DEL_PRODUCTO)).toBeTruthy();
    expect(getByText(productCreatedAt)).toBeTruthy();
    expect(getByText(PRODUCT_LABELS.CON_ESTA_COMPRA_ACUMULASTE)).toBeTruthy();
    expect(getByText(`${productPoints} puntos`)).toBeTruthy();
  });
});
