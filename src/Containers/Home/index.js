import React from 'react';
import {ScrollView} from 'react-native';

import {
  Top,
  UnitContent,
  MiddleBanner,
  CarouselBanner,
  Telusuri,
} from './Components';

const Home = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingBottom: 100,
        }}>
        <Top />
        <UnitContent />
        <MiddleBanner />
        <CarouselBanner />
        <Telusuri />
      </ScrollView>
    </>
  );
};

export default Home;
