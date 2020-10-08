import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {width} from '../../../Utils';

import {SvgCssUri} from 'react-native-svg';

const UnitFacility = ({}) => {
  return (
    <>
      <View style={styles.containers}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Kelengkapan Unit</Text>
        <View style={styles.container}>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/aC.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>AC</Text>
          </View>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/bed.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>Bed</Text>
          </View>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/dining-table.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>Dining Table</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/electric-stove.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>Gas Stove</Text>
          </View>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/kitchen-set.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>Kitchen Set</Text>
          </View>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/oven.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>Oven</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/refrigerator.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>Refrigerator</Text>
          </View>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/sofa.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>Sofa</Text>
          </View>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/tV.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>Tv</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/wardrobe.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>Wardobe</Text>
          </View>
          <View style={styles.itemsContainer}>
            <SvgCssUri
              width="30"
              height="30"
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima_x/Periurus%20Memoria/icon/water-heater.svg"
            />
            <Text style={{fontSize: 12, marginLeft: 10}}>Water Heater</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containers: {
    backgroundColor: '#FBFBFB',
    paddingVertical: 10,
    marginBottom: 20,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 3.1,
  },
  container: {
    flexDirection: 'row',

    marginTop: 15,
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
export default UnitFacility;
