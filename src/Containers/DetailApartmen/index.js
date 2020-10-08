import React from 'react';
import {ScrollView} from 'react-native';

import {
  Top,
  ContentDetail,
  UnitDetail,
  AboutUnit,
  UnitFacility,
} from './Components';

const Detail = ({}) => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingBottom: 150,
        }}>
        <Top />
        <ContentDetail />
        <UnitDetail />
        <AboutUnit />
        <UnitFacility />
      </ScrollView>
    </>
  );
};

export default Detail;
