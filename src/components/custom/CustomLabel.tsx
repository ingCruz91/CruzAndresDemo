import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

interface TextProps {
  children: React.ReactNode;
  style?: TextStyle;
  size?: number;
  fontFamily?: string;
  color?: string;
  numberOfLines?: number;
}

const CustomLabel = ({
  children,
  style = {},
  size = 16,
  fontFamily = 'System',
  color = '#000',
  numberOfLines = 1,
}: TextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.default, {fontSize: size, fontFamily, color}, style]}>
      {children}
    </Text>
  );
};
CustomLabel.WhiteBold = ({
  children,
  size,
  fontFamily,
  style,
  numberOfLines = 1,
}: TextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.whiteBold, {fontSize: size, fontFamily}, style]}>
      {children}
    </Text>
  );
};
CustomLabel.BlackBold = ({
  children,
  size,
  fontFamily,
  style,
  numberOfLines = 1,
}: TextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.blackBold, {fontSize: size, fontFamily}, style]}>
      {children}
    </Text>
  );
};

CustomLabel.BlackRegular = ({
  children,
  size,
  fontFamily,
  style,
  numberOfLines = 1,
}: TextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.blackRegular, {fontSize: size, fontFamily}, style]}>
      {children}
    </Text>
  );
};

CustomLabel.GrayBold = ({
  children,
  size,
  fontFamily,
  style,
  numberOfLines = 1,
}: TextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.grayBold, {fontSize: size, fontFamily}, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {},
  whiteBold: {
    fontFamily: 'AvenirBlack',
    fontWeight: 'bold',
    color: 'white',
  },
  blackBold: {
    fontWeight: 'bold',
    color: '#020202',
    fontFamily: 'AvenirBlack',
  },
  blackRegular: {
    color: '#020202',
    fontFamily: 'AvenirRoman',
  },
  grayBold: {
    fontFamily: 'AvenirBlack',
    fontWeight: 'bold',
    color: '#9B9898',
  },
});

export default CustomLabel;
