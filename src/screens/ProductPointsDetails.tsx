import * as React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import ProductButton from '../components/Product/ProductButton';
import ProductName from '../components/Product/ProductPointsDetails/ProductName';
import ProductImage from '../components/Product/ProductPointsDetails/ProductImage';
import ProductInformation from '../components/Product/ProductPointsDetails/ProductInformation';
import {PRODUCT_LABELS} from '../Utils/constants';

export type ProductPointsDetailsProps = {
  route: RouteProp<RootStackParamList, 'ProductPointsDetails'>;
};

export function ProductPointsDetails({route}: ProductPointsDetailsProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {productName, productCreatedAt, productPoints, productImage} =
    route.params;

  return (
    <SafeAreaView style={styles.appContainer}>
      <ProductName productName={productName} />
      <ProductImage productImage={productImage} />
      <ProductInformation
        productCreatedAt={productCreatedAt}
        productPoints={productPoints}
      />
      <View style={styles.buttonsContainer}>
        <ProductButton
          style={styles.buttonStyle}
          onPress={() => navigation.pop()}>
          {PRODUCT_LABELS.ACEPTAR}
        </ProductButton>
      </View>
    </SafeAreaView>
  );
}

export default ProductPointsDetails;

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#EAEAEA',
    flex: 1,
  },
  buttonsContainer: {
    flex: 0.8,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 45,
    marginHorizontal: 20,
  },
});
