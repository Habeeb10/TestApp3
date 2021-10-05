import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {hp, wp} from '../../common/utils';
import * as Images from '../../../assets';
import useNavigation from '../../hooks/useNavigation';
// import {format} from 'date-fns';

export type NewsCardType = {
  onPress?: () => void;
  item: {
    title: string;
    author: string;
    createdAt: string;
    id: number;
  };
};

export const NewsCard = (props: NewsCardType) => {
  const {navigate} = useNavigation();
  const {item} = props;
  const {title, author, createdAt, id} = item;
  // const dateFormatter = format(new Date(createdAt));

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigate('NewsImage', {id, title})}>
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
  author: {
    fontSize: hp(18),
  },
  titleContainer: {
    width: wp(190),
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
