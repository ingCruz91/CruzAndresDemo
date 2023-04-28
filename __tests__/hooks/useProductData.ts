import {cleanup, renderHook} from '@testing-library/react-hooks';
import fetchMock from 'jest-fetch-mock';
import useProductData from '../../src/hooks/useProductData';
import {PRODUCT_API_URL} from '../../src/Utils/constants';

describe('useProductData', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  afterAll(() => {
    cleanup();
  });

  it('fetches data successfully', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useProductData(PRODUCT_API_URL),
    );

    // Wait for the hook to finish fetching data
    await waitForNextUpdate();

    expect(result.current).toBeTruthy();
  });
});
