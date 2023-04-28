import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomLabel from '../../custom/CustomLabel';
import {PRODUCT_LABELS} from '../../../Utils/constants';

interface ProductPoints {
  totalPoints: string | undefined;
}
const ProductPointsCard = ({totalPoints}: ProductPoints) => {
  return (
    <View style={styles.pointsContainer}>
      <CustomLabel.GrayBold size={14} style={styles.yourPointsLabel}>
        {PRODUCT_LABELS.TUS_PUNTOS}
      </CustomLabel.GrayBold>
      <View style={styles.pointsCard}>
        <CustomLabel.WhiteBold size={16} style={styles.yourPointsText}>
          {PRODUCT_LABELS.MES}
        </CustomLabel.WhiteBold>
        <CustomLabel.WhiteBold size={29}>
          {totalPoints + PRODUCT_LABELS.PTS}
        </CustomLabel.WhiteBold>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pointsContainer: {
    flex: 2.4,
    alignItems: 'stretch',
  },
  pointsCard: {
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 5,
    backgroundColor: '#334FFA',
    alignItems: 'center',
    marginHorizontal: 50,
    flex: 1,
    marginBottom: 10,
    borderRadius: 20,
  },
  yourPointsLabel: {
    alignSelf: 'flex-start',
    fontSize: 14,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  yourPointsText: {
    alignSelf: 'flex-start',
    marginTop: 15,
    marginLeft: 19,
    marginBottom: 10,
  },
});

export default ProductPointsCard;
