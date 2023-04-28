import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductPoints from '../screens/ProductPoints';
import ProductPointsDetails from '../screens/ProductPointsDetails';

export type RootStackParamList = {
  ProductPoints: undefined;
  ProductPointsDetails: {
    productName: string;
    productCreatedAt: string;
    productPoints: number;
    productImage: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();
const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
  swipeEnabled: false,
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductPoints"
        screenOptions={screenOptions}>
        <Stack.Screen name="ProductPoints" component={ProductPoints} />
        <Stack.Screen
          name="ProductPointsDetails"
          component={ProductPointsDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
