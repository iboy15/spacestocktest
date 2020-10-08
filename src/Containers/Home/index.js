import React from "react";
import { ScrollView, View } from "react-native";

import {
  Top,
  UnitContent,
  MiddleBanner,
  CarouselBanner,
  Telusuri,
} from "./Components";

const Home = ({ route, navigation }) => {
  return (
    <>
      <View
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingBottom: 100,
        }}
      >
        <Top navigation={navigation} />
        <UnitContent navigation={navigation} />
        <MiddleBanner />
        <CarouselBanner />
        <Telusuri navigation={navigation} />
      </View>
    </>
  );
};

export default Home;
