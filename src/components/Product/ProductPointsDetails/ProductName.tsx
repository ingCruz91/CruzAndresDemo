import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomLabel from '../../custom/CustomLabel';

interface ProductName {
  productName: string;
}

const ProductName = ({productName}: ProductName) => {
  return (
    <View style={styles.productNameContainer}>
      <CustomLabel.BlackBold size={22} style={styles.productName}>
        {productName}
      </CustomLabel.BlackBold>
    </View>
  );
};

const styles = StyleSheet.create({
  productNameContainer: {
    marginBottom: 5,
    backgroundColor: '#CFD6FF',
    flex: 0.8,
    justifyContent: 'flex-end',
  },
  productName: {
    marginLeft: 10,
    marginBottom: 15,
  },
});

export default ProductName;
