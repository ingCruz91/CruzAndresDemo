import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
}

const CustomButton = ({children, onPress, style, textStyle}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

CustomButton.Primary = ({children, onPress, style, textStyle}: ButtonProps) => {
  return (
    <CustomButton
      onPress={onPress}
      style={[{backgroundColor: '#334FFA'}, style]}>
      <Text style={[{color: 'white', fontWeight: 'bold'}, textStyle]}>
        {children}
      </Text>
    </CustomButton>
  );
};

CustomButton.Secondary = ({
  children,
  onPress,
  style,
  textStyle,
}: ButtonProps) => {
  return (
    <CustomButton onPress={onPress} style={[{backgroundColor: 'gray'}, style]}>
      <Text style={[{color: 'black'}, textStyle]}>{children}</Text>
    </CustomButton>
  );
};

export default CustomButton;
