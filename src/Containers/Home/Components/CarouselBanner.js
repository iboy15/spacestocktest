import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {width} from '../../../Utils';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import AutoHeightImage from 'react-native-auto-height-image';
const listImages = [
  require('../../../Assets/Images/carousellbanner/carousel1.jpg'),
  require('../../../Assets/Images/carousellbanner/carousel2.jpg'),
  require('../../../Assets/Images/carousellbanner/carousel4.jpg'),
  require('../../../Assets/Images/carousellbanner/carousel5.jpg'),
];
const CarouselBanner = ({}) => {
  const [isActive, setAcitve] = useState(0);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.imgContainer}>
        <AutoHeightImage source={item} width={width - 40} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        marginTop: 15,
        width,
        paddingLeft: 15,
      }}>
      <Carousel
        activeSlideAlignment={'start'}
        data={listImages}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 30}
        onSnapToItem={(index) => setAcitve(index)}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        firstItem={0}
        enableMomentum={true}
        activeAnimationOptions={{
          friction: 4,
          tension: 40,
        }}
        inactiveSlideScale={0.98}
        inactiveSlideOpacity={1}
        // autoplay
        // loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
});

export default CarouselBanner;
