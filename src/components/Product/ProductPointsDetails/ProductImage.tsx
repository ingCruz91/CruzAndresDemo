import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface ProductImage {
  productImage: string;
}

const ProductImage = ({productImage}: ProductImage) => {
  return (
    <View style={styles.imageContainer}>
      <FastImage
        testID="productImage"
        style={styles.image}
        source={{
          uri: productImage,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 5,
    backgroundColor: 'white',
    borderWidth: 0.1,
    flex: 2.8,
    borderRadius: 10,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 5,
    width: 200,
    height: 200,
    marginRight: 10,
  },
});

export default ProductImage;
