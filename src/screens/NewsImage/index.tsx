import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {Container} from '../../common/container';
import {useNewsImage} from './hooks';
import {hp} from '../../common/utils';
import useRouteParam from '../../hooks/useRouteParam';
import {NewsContent, NewsContentsType} from './components';
import {SliderBox} from 'react-native-image-slider-box';

export default function NewsImage() {
  const {id, title} = useRouteParam<'NewsImage'>();
  const {images, comments} = useNewsImage();

  const _renderItem = ({item}: NewsContentsType) => {
    return <NewsContent item={item} />;
  };

  return (
    <>
      <Container>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>{title}</Text>
          <SliderBox
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            sliderBoxHeight={200}
            images={images}
            resizeMode={'cover'}
            circleLoop
            autoPlay
          />
          <FlatList
            data={comments}
            renderItem={_renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: hp(20),
  },
  title: {
    fontWeight: '600',
    fontSize: hp(20),
    alignSelf: 'center',
  },
});
