import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomLabel from '../../custom/CustomLabel';
import {PRODUCT_LABELS} from '../../../Utils/constants';

interface ProductInformation {
  productCreatedAt: string;
  productPoints: number;
}

const ProductInformation = ({
  productCreatedAt,
  productPoints,
}: ProductInformation) => {
  return (
    <View style={styles.detailsContainer}>
      <CustomLabel.GrayBold size={14} style={styles.productDetails}>
        {PRODUCT_LABELS.DETALLES_DEL_PRODUCTO}
      </CustomLabel.GrayBold>
      <CustomLabel.BlackBold size={14} style={styles.saleDate}>
        {productCreatedAt}
      </CustomLabel.BlackBold>
      <CustomLabel.GrayBold size={14} style={styles.earnedPoints}>
        {PRODUCT_LABELS.CON_ESTA_COMPRA_ACUMULASTE}
      </CustomLabel.GrayBold>
      <CustomLabel.BlackBold size={22} style={styles.earnedPoints}>
        {productPoints} {PRODUCT_LABELS.PUNTOS}
      </CustomLabel.BlackBold>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1.7,
    justifyContent: 'flex-start',
  },
  productDetails: {
    marginLeft: 15,
    marginTop: 17,
  },
  saleDate: {
    marginLeft: 15,
    marginVertical: 19,
  },
  earnedPoints: {
    marginLeft: 15,
    marginBottom: 25,
  },
});

export default ProductInformation;
