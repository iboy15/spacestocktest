import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {width} from '../../../Utils';

const UnitDetail = ({}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#FBFBFB',
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}>
        <View style={styles.container}>
          <View style={{marginRight: 30}}>
            <Text style={styles.title}>Developer</Text>
            <Text style={styles.subTitle}>Agung Podomoro</Text>
          </View>

          <View style={{marginRight: 30}}>
            <Text style={styles.title}>Unit Tersedia</Text>
            <Text style={styles.subTitle}>27</Text>
          </View>

          <View style={{marginRight: 15}}>
            <Text style={styles.title}>Jumlah Tower</Text>
            <Text style={styles.subTitle}>5 Tower</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  title: {fontSize: 16, fontWeight: 'bold'},
  subTitle: {
    fontSize: 12,
  },
});
export default UnitDetail;
