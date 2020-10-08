import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { width } from "../../../Utils";
import AutoHeightImage from "react-native-auto-height-image";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const ContentDetail = ({ data }) => {
  return (
    <>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{data.name}</Text>

        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <EvilIcons name="location" color="gray" size={24} />
          <Text style={{ marginLeft: 2, bottom: 2, opacity: 0.5 }}>
            Jl. Raya Kalibata Rt.9/rw.4, Pancoran, Rawa Jati, Jakarta selatan
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  UnitCategoryContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  btnCategoryContainer: {
    borderWidth: 1,
    borderColor: "#0C5777",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  unitName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0C5777",
    width: width / 2.5,
  },
  priceContainer: {
    backgroundColor: "#FAFAFA",
    paddingVertical: 10,
    marginTop: 20,
    width: width / 2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
export default ContentDetail;
