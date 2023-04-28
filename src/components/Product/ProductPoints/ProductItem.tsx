import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomLabel from '../../custom/CustomLabel';
import React from 'react';
import formatDate from '../../../Utils/utils';
import {Product} from '../../../screens/ProductPoints';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigation';
import FastImage from 'react-native-fast-image';

function ProductItem(itemData: Product) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {image, product, createdAt, is_redemption, points} = itemData;

  const formatDateCreatedAt = formatDate(createdAt);

  function navigateToProductPointsDetails() {
    navigation.navigate('ProductPointsDetails', {
      productName: product,
      productCreatedAt: formatDateCreatedAt,
      productPoints: points,
      productImage: image,
    });
  }

  return (
    <View>
      <TouchableOpacity
        testID="productPress"
        onPress={navigateToProductPointsDetails}
        style={styles.container}>
        <FastImage
          testID="productImage"
          style={styles.image}
          source={{
            uri: image,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.productContainer}>
          <CustomLabel.BlackBold size={14} style={styles.product}>
            {product}
          </CustomLabel.BlackBold>
          <CustomLabel.BlackRegular size={12} style={styles.createdAt}>
            {formatDateCreatedAt}
          </CustomLabel.BlackRegular>
        </View>
        <View style={styles.pointsContainer}>
          <CustomLabel
            style={
              is_redemption ? styles.redemptionTrue : styles.redemptionFalse
            }>
            {is_redemption ? '+' : '-'}
          </CustomLabel>
          <CustomLabel.BlackBold style={styles.points}>
            {points}
          </CustomLabel.BlackBold>
          <CustomLabel.BlackBold style={styles.icon}>
            {'>'}
          </CustomLabel.BlackBold>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 5,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productContainer: {
    marginTop: 5,
    flex: 1,
  },
  pointsContainer: {
    flexDirection: 'row',
  },
  createdAt: {
    marginTop: 4,
  },
  redemptionTrue: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'green',
  },
  redemptionFalse: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'red',
  },
  product: {
    color: '#000000',
  },
  points: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  icon: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
    alignSelf: 'center',
  },
});

export default ProductItem;
