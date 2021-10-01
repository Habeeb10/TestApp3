import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Container} from '../../common/container';
import {useSelector, useDispatch} from 'react-redux';
import {Dispatch, RootState} from '../../store';
import {NewsCard, NewsCardType} from './components';
import {hp, wp} from '../../common/utils';
import {SearchIcon} from '../../../assets/Svg';
import * as Colors from '../../common/colors';

export default function LandingPage() {
  const dispatch = useDispatch<Dispatch>();

  const {news, loading, images} = useSelector(
    (state: RootState) => state.news_Store,
  );

  useEffect(() => {
    dispatch.news_Store.fetchNews();
    dispatch.news_Store.getImages(4);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _renderItem = ({item}: NewsCardType) => {
    return <NewsCard item={item} />;
  };

  return (
    <>
      <Container>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.allNews}>All News</Text>
            <TouchableOpacity style={styles.addNewButton}>
              <Text>Add New</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchBox}>
            <TouchableOpacity>
              <SearchIcon />
            </TouchableOpacity>
            <TextInput placeholder="Search" style={styles.input} />
          </View>
          <View style={styles.container}>
            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <FlatList
                data={news}
                renderItem={_renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => `${item.title}_${index}`}
              />
            )}
          </View>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(20),
  },
  allNews: {
    fontSize: 32,
    fontWeight: '600',
  },
  input: {
    marginLeft: wp(10),
    fontSize: hp(20),
    paddingRight: wp(20),
  },
  mainContainer: {
    paddingHorizontal: wp(10),
    paddingTop: hp(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(15),
    alignItems: 'center',
    marginBottom: hp(20),
  },
  addNewButton: {
    backgroundColor: 'pink',
    paddingHorizontal: wp(30),
    paddingVertical: hp(10),
    borderRadius: 30,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: hp(50),
    borderRadius: 7,
    backgroundColor: Colors.Border,
    padding: 10,
  },
});
