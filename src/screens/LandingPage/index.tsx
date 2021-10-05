import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Container} from '../../common/container';
import {NewsCard, NewsCardType} from './components';
import {SearchIcon} from '../../../assets/Svg';
import {LandingPageStyles as styles} from './style';
import {useLandingPage} from './hooks';

export default function LandingPage() {
  const {loading, news} = useLandingPage();

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
