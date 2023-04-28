import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomLabel from '../../custom/CustomLabel';
import {PRODUCT_LABELS} from '../../../Utils/constants';

const WelcomeBackUser = () => {
  return (
    <View style={styles.welcomeContainer}>
      <CustomLabel.BlackBold size={16}>
        {PRODUCT_LABELS.BIENVENIDO_DE_VUELTA}
      </CustomLabel.BlackBold>
      <CustomLabel.BlackRegular>
        {PRODUCT_LABELS.NOMBRE_USUARIO}
      </CustomLabel.BlackRegular>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 0.6,
    marginLeft: 15,
  },
});

export default WelcomeBackUser;
