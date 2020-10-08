import React, {useState} from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {width} from '../../../Utils';

import AutoHeightImage from 'react-native-auto-height-image';
const MiddleBanner = () => {
  return (
    <>
      <AutoHeightImage
        source={require('../../../Assets/Images/covid.jpg')}
        width={width}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default MiddleBanner;
