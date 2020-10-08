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
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Tentang Kalibata City Green Palace
        </Text>
        <Text style={{fontSize: 12, marginTop: 10}}>
          Kalibata City Green Palace berlokasi di Jl. Raya Kalibata RT.9/RW.4.
          Apartemen ini dikembangkan oleh Synthesis Development ,Kalibata City
          Green Palace memiliki 8 tower. Dalam kompleks ini tersedia beragam
          fasilitas untuk mendukung hunian Anda, Terdapat pula beragam sarana
          dan fasilitas yang menjamin kenyamanan hunian Anda, seperti:
          Basketball Court, Gym, Playground, Swimming Pool dan Tennis Court.
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
