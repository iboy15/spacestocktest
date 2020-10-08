import React from "react";
import { ScrollView } from "react-native";

import {
  Top,
  ContentDetail,
  UnitDetail,
  AboutUnit,
  UnitFacility,
} from "./Components";

const DetailUnit = ({ route, navigation }) => {
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
        <Top navigation={navigation} image={route.params.data.image} />
        <ContentDetail name={route.params.data.nama} />
        <UnitDetail />
        <AboutUnit />
        <UnitFacility />
      </ScrollView>
    </>
  );
};

export default DetailUnit;
