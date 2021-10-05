import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {hp, wp} from '../../common/utils';

export type NewsContentsType = {
  onPress?: () => void;
  item: {
    image: string;
    id: number;
    comment: string;
  };
};

export const NewsContent = (props: NewsContentsType) => {
  const {item} = props;
  const {comment, image} = item;

  return (
    <View style={styles.container}>
      <Text style={styles.comments}>{comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(20),
  },
  comments: {
    fontWeight: '400',
    fontSize: 18,
    marginVertical: hp(7),
  },
});
