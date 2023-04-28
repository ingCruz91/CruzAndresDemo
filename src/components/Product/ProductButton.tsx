import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import CustomButton from '../custom/CustomButton';

interface ProductButton extends TouchableOpacityProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ProductButton = ({onPress, children, style}: ProductButton) => {
  return (
    <View style={styles.buttonsContainer}>
      <CustomButton.Primary
        style={[styles.buttonStyle, style]}
        onPress={onPress}>
        {children}
      </CustomButton.Primary>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
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

export default ProductButton;
