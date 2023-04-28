import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ProductPointsCard from '../components/Product/ProductPoints/ProductPointsCard';
import ProductPointsList from '../components/Product/ProductPoints/ProductPointsList';
import FilterButtons from '../components/Product/ProductPoints/FilterButtons';
import useProductData from '../hooks/useProductData';
import ProductButton from '../components/Product/ProductButton';
import WelcomeBackUser from '../components/Product/ProductPoints/WelcomeBackUser';
import {PRODUCT_API_URL, PRODUCT_LABELS} from '../Utils/constants';

export interface Product {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
}

function ProductPoints() {
  const productData = useProductData(PRODUCT_API_URL);

  const [filteredData, setFilteredData] = useState<Product[] | null>([]);
  const [enableFilterButtons, setEnableFilterButtons] = useState<boolean>(true);

  const earnedData = productData?.filter(product => product?.is_redemption);
  const redeemedData = productData?.filter(product => !product?.is_redemption);

  function getTotalPoints() {
    const points = redeemedData?.map(
      product => ({points: product?.points} || []),
    );
    const totalPoints = points?.reduce((acc, curr) => acc + curr?.points, 0);

    return (
      totalPoints?.toLocaleString('en-US', {
        style: 'decimal',
      }) || '0'
    );
  }

  function setFilteredEarnedData() {
    setEnableFilterButtons(!enableFilterButtons);
    if (earnedData) {
      setFilteredData(earnedData);
    }
  }

  function setFilteredRedeemedData() {
    setEnableFilterButtons(!enableFilterButtons);
    if (redeemedData) {
      setFilteredData(redeemedData);
    }
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <WelcomeBackUser />
      <ProductPointsCard totalPoints={getTotalPoints()} />
      <ProductPointsList
        data={enableFilterButtons ? productData : filteredData}
      />
      {enableFilterButtons ? (
        <FilterButtons
          testID="filter-buttons"
          onPressEarned={setFilteredEarnedData}
          onPressRedeemed={setFilteredRedeemedData}
        />
      ) : (
        <ProductButton
          testID="product-button"
          onPress={() => setEnableFilterButtons(!enableFilterButtons)}>
          {PRODUCT_LABELS.TODOS}
        </ProductButton>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#EAEAEA',
    flex: 1,
    borderWidth: 1,
    borderColor: 'pink',
  },
});

export default ProductPoints;
