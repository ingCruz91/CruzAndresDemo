import React from 'react';
import {StyleSheet, TouchableOpacityProps, View} from 'react-native';
import CustomButton from '../../custom/CustomButton';
import {PRODUCT_LABELS} from '../../../Utils/constants';

interface FilterButtons extends TouchableOpacityProps {
  onPressEarned: () => void;
  onPressRedeemed: () => void;
}

const FilterButtons = ({onPressEarned, onPressRedeemed}: FilterButtons) => {
  return (
    <View style={styles.buttonsContainer}>
      <CustomButton.Primary
        style={styles.buttonStyle}
        onPress={() => onPressEarned()}>
        {PRODUCT_LABELS.GANADOS}
      </CustomButton.Primary>
      <CustomButton.Primary
        style={styles.buttonStyle}
        onPress={onPressRedeemed}>
        {PRODUCT_LABELS.CANJEADOS}
      </CustomButton.Primary>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 45,
    flex: 1,
    marginHorizontal: 15,
  },
});

export default FilterButtons;
