import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CustomLabel from '../../custom/CustomLabel';
import ProductItem from './ProductItem';
import {Product} from '../../../screens/ProductPoints';
import {PRODUCT_LABELS} from '../../../Utils/constants';

interface ProductPointsList {
  data: Product[] | null;
}
const ProductPointsList = ({data}: ProductPointsList) => {
  return (
    <View style={styles.userPointsContainer}>
      <CustomLabel.GrayBold size={14} style={styles.userPointsSection}>
        {PRODUCT_LABELS.MOVIMIENTOS}
      </CustomLabel.GrayBold>
      <View style={styles.userPointsList}>
        <FlatList
          testID="flatListTest"
          data={data}
          renderItem={itemData => {
            return <ProductItem {...itemData.item} />;
          }}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userPointsContainer: {
    borderRadius: 10,
    flex: 4.5,
  },
  userPointsSection: {
    alignSelf: 'flex-start',
    fontSize: 14,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  userPointsList: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginHorizontal: 15,
  },
});

export default ProductPointsList;
