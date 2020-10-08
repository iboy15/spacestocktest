import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {width} from '../../../Utils';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import AutoHeightImage from 'react-native-auto-height-image';
const listImages = [
  {
    nama: 'Jakarta Pusat',
    image: require('../../../Assets/Images/lokasi/jakarta_pusat.png'),
  },

  {
    nama: 'Jakarta Timur',
    image: require('../../../Assets/Images/lokasi/jakarta_timur.png'),
  },
  {
    nama: 'Jakarta Selatan',
    image: require('../../../Assets/Images/lokasi/jakarta_selatan.png'),
  },
  {
    nama: 'Jakarta Barat',
    image: require('../../../Assets/Images/lokasi/jakarta_barat.png'),
  },
  {
    nama: 'Jakarta Utara',
    image: require('../../../Assets/Images/lokasi/jakarta_utara.png'),
  },
];
const Populer = ({}) => {
  const [isActive, setAcitve] = useState(0);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.imgContainer}>
        <AutoHeightImage source={item.image} width={width / 3} />
        <Text
          style={{
            position: 'absolute',
            bottom: 10,

            alignSelf: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}>
          {item.nama}
        </Text>
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
      <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>
        Sewa - Apartemen Populer
      </Text>
      <Carousel
        activeSlideAlignment={'start'}
        data={listImages}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width / 3 + 10}
        onSnapToItem={(index) => setAcitve(index)}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        firstItem={0}

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

export default Populer;
