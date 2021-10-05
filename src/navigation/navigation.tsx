import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../screens/LandingPage';
import NewsImage from '../screens/NewsImage';
import {NavigationType} from './type';

const Stack = createStackNavigator<NavigationType>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="NewsImage" component={NewsImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
