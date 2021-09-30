import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {hp, wp} from '../../common/utils';
import * as Images from '../../../assets';

export const NewsCard = ({onPress, item}) => {
  const {title, author, createdAt} = item;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Image source={Images.AuthorPix} style={styles.authorPix} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{`By: ${author}`}</Text>
      </View>
      <Text>{createdAt}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: wp(8),
    height: hp(8),
    borderRadius: 4,
    backgroundColor: 'black',
  },
  author: {
    fontSize: hp(18),
  },
  titleContainer: {
    width: 190,
  },
  container: {
    marginBottom: hp(25),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  authorPix: {
    width: wp(50),
    height: hp(50),
    borderRadius: 25,
    marginRight: wp(15),
  },
  title: {
    fontSize: hp(20),
    marginBottom: hp(3),
    fontWeight: '600',
  },
});
