import React from "react";
import { ScrollView } from "react-native";

import {
  Top,
  ContentDetail,
  UnitDetail,
  AboutUnit,
  UnitFacility,
  TowerAvailable,
  UnitAvailable,
} from "./Components";

const Detail = ({ navigation, route }) => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingBottom: 150,
        }}
      >
        <Top image={route.params.data.images} navigation={navigation} />
        <ContentDetail data={route.params.data} />
        <UnitDetail />
        <AboutUnit />
        <UnitFacility />
        <TowerAvailable />
        <UnitAvailable navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default Detail;
