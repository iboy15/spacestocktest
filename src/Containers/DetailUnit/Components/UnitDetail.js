import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {width} from '../../../Utils';

import Svg, {Path, G} from 'react-native-svg';

const UnitDetail = ({}) => {
  return (
    <>
      <View style={{backgroundColor: '#FBFBFB', paddingVertical: 10}}>
        <View style={styles.container}>
          <Svg height="35" width="35" viewBox="0 0 24 24">
            <Path
              fill="#E5E5E5"
              d="M19.905 15.224h.687v-.68h-.687v.68zm-1.375 0h.687v-.68h-.687v.68zm-1.375 0h.687v-.68h-.687v.68zm-1.375 0h.687v-.68h-.687v.68zm-1.376 0h.688v-.68h-.688v.68zm-1.374 0h.687v-.68h-.687v.68zm-1.376 0h.689v-.68h-.689v.68zm-1.374 0h.689v-.68h-.689v.68zm-1.375 0h.687v-.68h-.687v.68zm-1.375 0h.688v-.68H7.53v.68zm-1.374 0h.688v-.68h-.688v.68zm-1.375 0h.688v-.68H4.78v.68zm-1.376 0h.687v-.68h-.687v.68zm-1.375 0h.688v-.68H2.03v.68zm17.875-3.06H2.718c-.569 0-1.03.456-1.03 1.02v3.06h19.248v-3.06a1.027 1.027 0 0 0-1.031-1.02z"></Path>
            <Path
              fill="#4B4B4B"
              d="M20.592 14.544v1.04h-.687v-1.04h.687zm-17.873 0v1.04h-.688v-1.04h.688zm1.374 0v1.04h-.687v-1.04h.687zm1.376 0v1.04H4.78v-1.04h.688zm1.375 0v1.04h-.688v-1.04h.688zm1.375 0v1.04h-.688v-1.04h.688zm1.373 0v1.04h-.687v-1.04h.687zm1.377 0v1.04h-.689v-1.04h.689zm1.374 0v1.04h-.689v-1.04h.689zm1.374 0v1.04h-.687v-1.04h.687zm1.375 0v1.04h-.688v-1.04h.688zm1.375 0v1.04h-.687v-1.04h.687zm1.374 0v1.04h-.687v-1.04h.687zm1.376 0v1.04h-.687v-1.04h.687z"></Path>
            <Path
              fill="#4B4B4B"
              d="M20.936 16.245H1.688v-3.062c0-.563.461-1.02 1.031-1.02h17.186c.569 0 1.03.457 1.03 1.02v3.062zM3.063 19.646H19.56v-2.721H3.063v2.721zm0-8.163h.687V4.68h-.687v6.803zm7.905-2.381v2.381H5.811V9.102a.343.343 0 0 1 .345-.34h4.468c.19 0 .343.151.344.34zm5.843 0v2.381h-5.157V9.102a.343.343 0 0 1 .345-.34h4.468c.19 0 .343.151.344.34zM4.437 5.36h13.747v6.122H17.5V9.102a1.028 1.028 0 0 0-1.032-1.02h-4.468a1.032 1.032 0 0 0-.688.265 1.031 1.031 0 0 0-.687-.266H6.156a1.03 1.03 0 0 0-1.033 1.02v2.382h-.686V5.361zm14.435 6.122h.688V4.68h-.688v6.803zm1.376.033V4h-2.064v.68H4.437V4H2.375v7.517a1.698 1.698 0 0 0-.823.45l-.028.024c-.316.31-.523.725-.524 1.192v3.742h1.375v3.401h17.873v-3.401h1.375v-3.742a1.71 1.71 0 0 0-1.375-1.667z"></Path>
            <Path
              fill="#FEDA9B"
              d="M10.624 8.761c.19 0 .343.152.344.34v2.382H5.812V9.102a.343.343 0 0 1 .344-.34zm5.843 0c.19 0 .343.152.344.34v2.382h-5.157V9.102a.343.343 0 0 1 .345-.34z"></Path>
          </Svg>

          <View style={{marginRight: 15}}>
            <Text style={{fontSize: 12}}>Kondisi Unit</Text>
            <Text style={{fontSize: 12}}>Full Furnished</Text>
          </View>

          <Svg height="35" width="35" viewBox="0 0 24 24">
            <Path
              fill="#4B4B4B"
              d="M5.393 2.113a.39.39 0 0 1 .39.39V18.22h14.944v-5.876a.39.39 0 1 1 .78 0v9.265a.39.39 0 0 1-.39.391H2.391A.39.39 0 0 1 2 21.61V2.502a.39.39 0 0 1 .39-.39zM19.258 2a.5.5 0 0 1 .5.5v14.556a.5.5 0 0 1-.5.5H6.925a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5h12.333zm-.278.778H7.203v14H18.98v-14zM8.258 12.722c.188 0 .345.134.381.31l.008.08v1.887L10.48 15c.188 0 .345.133.381.31l.008.079a.389.389 0 0 1-.31.38l-.079.009H8.258a.389.389 0 0 1-.388-.417v-2.25c0-.215.173-.389.388-.389z"></Path>
            <Path
              fill="#FEDA9B"
              d="M2.781 2.894h2.221v2.553h-.504a.39.39 0 1 0 0 .78h.504v2.63h-.504a.39.39 0 0 0 0 .782h.504v2.63h-.504a.39.39 0 1 0 0 .78h.504v2.63h-.504a.39.39 0 1 0 0 .782h.504v2.63h-.504a.39.39 0 0 0 0 .78h.504v1.348h-2.22V2.894z"></Path>
            <Path
              fill="#E4E4E4"
              d="M20.727 21.219H5.784V19h1.762v.504a.39.39 0 0 0 .781 0V19h2.634v.504a.39.39 0 0 0 .781 0V19h2.634v.504a.39.39 0 0 0 .781 0V19h2.634v.504a.39.39 0 0 0 .781 0V19h2.155v2.218z"></Path>
          </Svg>

          <View style={{marginRight: 15}}>
            <Text style={{fontSize: 12}}>Luas</Text>
            <Text style={{fontSize: 12}}>36 SQM</Text>
          </View>

          <Svg height="35" width="35" viewBox="0 0 24 24">
            <Path
              fill="#4B4B4B"
              d="M16.013 5.561h5.139v-.78h-5.139v.78zm5.139 1.534h-1.598a.39.39 0 0 0 0 .782h1.598v4.283l-10.889 8.658h-6.55v-2.43H5.31a.39.39 0 0 0 0-.78H3.713v-.741h6.462a.389.389 0 0 0 .389-.39V11.604h6.228c.215 0 .39-.174.39-.39V6.343h3.97v.752zM2.779 16.086h7.005v-.781H2.78v.781zm6.617-5.262h7.007v-.78H9.396v.78zM21.541 4h-5.916a.39.39 0 0 0-.39.39v1.562c0 .216.174.39.39.39h.778v2.92H9.006a.39.39 0 0 0-.388.39v1.561c0 .216.173.39.388.39h.778v2.92H2.39a.391.391 0 0 0-.39.392v1.561c0 .215.174.39.39.39h.544v4.34c0 .217.175.392.39.392h7.075c.088 0 .173-.03.241-.085l11.143-8.86a.385.385 0 0 0 .147-.306V4.39A.389.389 0 0 0 21.54 4z"></Path>
            <Path
              fill="#4B4B4B"
              d="M6.438 17.607h-.01a.39.39 0 0 0 0 .78h.01a.39.39 0 0 0 0-.78M18.427 7.876h.01a.39.39 0 0 0 0-.781h-.01a.39.39 0 0 0-.389.39c0 .216.174.391.389.391"></Path>
            <Path fill="#FEDA9B" d="M2.78 16.086h7.004v-.781H2.78z"></Path>
            <Path fill="#E5E5E5" d="M9.396 10.824h7.007v-.78H9.396z"></Path>
            <Path fill="#FEDA9B" d="M16.013 5.561h5.139v-.78h-5.139z"></Path>
          </Svg>

          <View style={{marginRight: 15}}>
            <Text style={{fontSize: 12}}>Lantai</Text>
            <Text style={{fontSize: 12}}>5</Text>
          </View>
        </View>
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
export default UnitDetail;
