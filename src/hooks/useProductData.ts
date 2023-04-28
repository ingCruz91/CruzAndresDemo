import {useEffect, useState} from 'react';
import {Product} from '../screens/ProductPoints';

const useProductData = (url: string) => {
  const [productData, setProductData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      const controller = new AbortController();
      const {signal} = controller;
      try {
        const response = await fetch(url, {signal});
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        setProductData(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchProductData();
  }, [url]);

  return productData;
};

export default useProductData;
