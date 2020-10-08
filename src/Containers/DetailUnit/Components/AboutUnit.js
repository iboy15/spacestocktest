import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {width} from '../../../Utils';

const AboutUnit = ({}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#FBFBFB',
          paddingHorizontal: 15,
          marginTop: 15,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tentang Unit</Text>
        <Text style={{fontSize: 12, marginTop: 10}}>
          Sebuah hunian nyaman dengan tipe 2BR ini memiliki beragam faktor
          pendukung yang membuat hunian semakin nyaman. Tersedia untuk rent,
          unit ini menawarkan pemandangan City dengan kondisi Full Furnished
          yang terdiri dari AC, Bed, Dining Table, Electric Stove, Gas Stove,
          Kitchen Set, Oven, Refrigerator, Sofa, TV, Wardrobe dan Water Heater.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
    alignItems: 'center',
  },
  unitName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C5777',
    width: width / 2.5,
  },
  priceContainer: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 10,
    marginTop: 20,
    width: width / 2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
export default AboutUnit;
