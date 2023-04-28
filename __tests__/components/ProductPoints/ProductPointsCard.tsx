import React from 'react';
import {render} from '@testing-library/react-native';
import ProductPointsCard from '../../../src/components/Product/ProductPoints/ProductPointsCard';
import {PRODUCT_LABELS} from '../../../src/Utils/constants';

describe('ProductPointsCard', () => {
  it('renders the total points correctly', () => {
    const totalPoints = '500';

    const {getByText} = render(<ProductPointsCard totalPoints={totalPoints} />);

    expect(getByText(PRODUCT_LABELS.TUS_PUNTOS)).toBeDefined();
    expect(getByText(PRODUCT_LABELS.MES)).toBeDefined();
    expect(getByText('500 pts')).toBeDefined();
  });
});
