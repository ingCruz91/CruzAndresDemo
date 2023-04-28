import React from 'react';
import {render} from '@testing-library/react-native';

import WelcomeBackUser from '../../../src/components/Product/ProductPoints/WelcomeBackUser';
import {PRODUCT_LABELS} from '../../../src/Utils/constants';

describe('WelcomeBackUser component', () => {
  it('should render the welcome message and user name', () => {
    const {getByText} = render(<WelcomeBackUser />);
    expect(getByText(PRODUCT_LABELS.BIENVENIDO_DE_VUELTA)).toBeDefined();
    expect(getByText(PRODUCT_LABELS.NOMBRE_USUARIO)).toBeDefined();
  });
});
