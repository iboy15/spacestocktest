import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {width} from '../../../Utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../Config/colors';
const UnitContent = ({navigation}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          backgroundColor: '#F3F3F3',
          justifyContent: 'space-around',
          width,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.main,
              height: 60,
              width: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons name="apartment" color="white" size={35} />
          </TouchableOpacity>
          <Text style={{marginTop: 8, fontSize: 11}}>Apartemen Baru</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.main,
              height: 60,
              width: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome name="building" color="white" size={30} />
          </TouchableOpacity>
          <Text style={{marginTop: 8, fontSize: 11}}>Unit Apartemen</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.main,
              height: 60,
              width: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="office-building"
              color="white"
              size={35}
            />
          </TouchableOpacity>
          <Text style={{marginTop: 8, fontSize: 11}}>Kantor</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFCE00',
              height: 60,
              width: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="blackboard" color="white" size={35} />
          </TouchableOpacity>
          <Text style={{marginTop: 8, fontSize: 11}}>Titip Jual / Sewa</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default UnitContent;
