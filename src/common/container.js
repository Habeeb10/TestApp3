// import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import * as Colors from './colors';

export const Container = ({
  children,
  barColor = Colors.Background,
  backgroundColor,
}) => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{backgroundColor: barColor}} />
      <View style={{backgroundColor, flex: 1}}>{children}</View>
    </>
  );
};
