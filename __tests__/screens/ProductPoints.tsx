import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ProductPoints from '../../src/screens/ProductPoints';
import {PRODUCT_LABELS} from '../../src/Utils/constants';

describe('ProductPoints', () => {
  it('renders ProductPoints correctly', () => {
    const {toJSON} = render(<ProductPoints />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should display all points button when earned points button is pressed', async () => {
    const {getByText} = render(<ProductPoints />);

    const earnedButton = getByText(PRODUCT_LABELS.GANADOS);

    fireEvent.press(earnedButton);
    expect(getByText(PRODUCT_LABELS.TODOS)).toBeTruthy();
  });

  it('should display all points button when redeemed points button is pressed', async () => {
    const {getByText} = render(<ProductPoints />);

    const redeemedButton = getByText(PRODUCT_LABELS.CANJEADOS);

    fireEvent.press(redeemedButton);
    expect(getByText(PRODUCT_LABELS.TODOS)).toBeTruthy();
  });

  it('should display filter buttons when all points button is pressed', async () => {
    const {getByText} = render(<ProductPoints />);
    // first need to press any of filter buttons to show all points button
    const earnedButton = getByText(PRODUCT_LABELS.GANADOS);
    fireEvent.press(earnedButton);

    const allPointsButton = getByText(PRODUCT_LABELS.TODOS);
    fireEvent.press(allPointsButton);
    expect(getByText(PRODUCT_LABELS.GANADOS)).toBeTruthy();
  });

  it('renders flatList correctly when component first render', () => {
    const {getByTestId} = render(<ProductPoints />);
    const productPointsList = getByTestId('flatListTest');

    expect(productPointsList).toBeTruthy();
  });

  it('renders flatList correctly when press earned points button', () => {
    const {getByTestId, getByText} = render(<ProductPoints />);
    const productPointsList = getByTestId('flatListTest');

    const earnedButton = getByText(PRODUCT_LABELS.GANADOS);
    fireEvent.press(earnedButton);

    expect(productPointsList).toBeTruthy();
  });

  it('renders flatList correctly when press redeemed points button', () => {
    const {getByTestId, getByText} = render(<ProductPoints />);
    const productPointsList = getByTestId('flatListTest');

    const redeemedButton = getByText(PRODUCT_LABELS.CANJEADOS);
    fireEvent.press(redeemedButton);

    expect(productPointsList).toBeTruthy();
  });

  it('renders flatList correctly when press allPoints Button', () => {
    const {getByTestId, getByText} = render(<ProductPoints />);

    // first need to press any of filter buttons to show all points button
    const earnedButton = getByText(PRODUCT_LABELS.GANADOS);
    fireEvent.press(earnedButton);

    const allPointsButton = getByText(PRODUCT_LABELS.TODOS);
    fireEvent.press(allPointsButton);

    const productPointsList = getByTestId('flatListTest');

    expect(productPointsList).toBeTruthy();
  });
});
