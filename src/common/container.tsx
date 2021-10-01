// import {StatusBar} from 'expo-status-bar';
import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import * as Colors from './colors';

type ContainerType = {
  barColor?: string;
  backgroundColor?: string;
  children: ReactNode;
};

export const Container = ({
  children,
  barColor = Colors.Background,
  backgroundColor,
}: ContainerType) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: barColor}} />
      <View style={[styles.container, {backgroundColor}]}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
