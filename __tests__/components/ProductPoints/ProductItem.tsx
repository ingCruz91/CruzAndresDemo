import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ProductItem from '../../../src/components/Product/ProductPoints/ProductItem';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('ProductItem', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    // @ts-ignore
    useNavigation.mockReturnValue({
      navigate: navigateMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockProduct = {
    image: 'https://loremflickr.com/640/480/technic',
    product: 'Product Fantastic Granite Bacon',
    createdAt: '2022-12-31T10:20:00.909Z',
    is_redemption: true,
    points: 100,
    id: '123',
  };

  it('should render the product item with correct data', () => {
    const {getByTestId, getByText} = render(<ProductItem {...mockProduct} />);

    expect(getByTestId('productPress')).toBeDefined();
    expect(getByTestId('productImage')).toBeDefined();
    expect(getByText(mockProduct.product)).toBeDefined();
    expect(getByText(mockProduct.points.toString())).toBeDefined();
  });

  it('should navigate to ProductPointsDetails screen when pressed', () => {
    const {getByTestId} = render(<ProductItem {...mockProduct} />);

    fireEvent.press(getByTestId('productPress'));

    expect(navigateMock).toHaveBeenCalledWith('ProductPointsDetails', {
      productName: mockProduct.product,
      productCreatedAt: '31 de diciembre de 2022',
      productPoints: mockProduct.points,
      productImage: mockProduct.image,
    });
  });
});
