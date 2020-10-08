import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {width, IPHONEX} from '../../../Utils';
import DropDownPicker from 'react-native-dropdown-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../../Config/colors';
const Top = () => {
  const [propertyType, setPropertyType] = useState('Apartemen');
  const [isRent, setIsRent] = useState(true);
  const [textFilter, setTextFilter] = useState('');

  const dropDownItems = [
    {label: 'Apartemen', value: 'Apartemen'},
    {label: 'Kantor', value: 'Kantor'},
  ];

  return (
    <>
      <View style={{flex: 1}}>
        <AutoHeightImage
          width={width}
          source={require('../../../Assets/Images/banner.png')}
        />
        <View style={styles.topContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <AutoHeightImage
              width={width / 2.5}
              source={require('../../../Assets/Images/spacestock.png')}
            />
            <View>
              <Text style={{textAlign: 'right', fontWeight: 'bold'}}>
                Properti
              </Text>
              <Text style={{textAlign: 'right', fontWeight: 'bold'}}>
                di Ujung Jari
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: '65%', paddingRight: 10}}>
              <Text>Cari</Text>
              <DropDownPicker
                items={dropDownItems}
                defaultValue={propertyType}
                containerStyle={{height: 40, marginTop: 7}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={styles.dropDownItemStyle}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(item) => setPropertyType(item.value)}
              />
            </View>

            <View style={{width: '35%'}}>
              <Text>Saya Ingin</Text>
              <View style={styles.rentOptionContainer}>
                <TouchableOpacity
                  onPress={() => setIsRent(!isRent)}
                  style={[
                    styles.rentBtnContainer,
                    {
                      backgroundColor: isRent ? colors.main : 'white',
                    },
                  ]}>
                  <Text
                    style={{
                      color: isRent ? 'white' : 'black',
                      textAlign: 'center',
                    }}>
                    Sewa
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setIsRent(!isRent)}
                  style={[
                    styles.rentBtnContainer,
                    {
                      backgroundColor: isRent ? 'white' : colors.main,
                    },
                  ]}>
                  <Text
                    style={{
                      color: isRent ? 'black' : 'white',
                      textAlign: 'center',
                    }}>
                    Beli
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 7}}>
            <Text>Cari Lokasi</Text>
            <View style={styles.searchContainer}>
              <EvilIcons
                name="search"
                size={24}
                color="gray"
                style={{opacity: 0.6}}
              />
              <TextInput
                value={textFilter}
                onChangeText={setTextFilter}
                placeholder="Ketik Lokasi atau nama gedung"
                style={{height: 40}}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 10,
    marginTop: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  topContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingTop: IPHONEX ? 40 : 10,
    paddingHorizontal: 15,
    width,
  },
  dropDownItemStyle: {
    justifyContent: 'flex-start',
  },
  rentOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.main,
    marginTop: 7,
    overflow: 'hidden',
  },
  rentBtnContainer: {
    width: '50%',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default Top;
