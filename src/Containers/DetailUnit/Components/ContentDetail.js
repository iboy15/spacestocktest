import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { width } from "../../../Utils";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const ContentDetail = ({ name }) => {
  return (
    <>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{name}</Text>
        <View style={styles.nameIDContainer}>
          <Text style={styles.unitName}>Kalibata City Green Place</Text>
          <View style={{ width: width / 3 }}>
            <Text style={{ fontSize: 16 }}>- Unit ID :</Text>
            <Text style={{ fontSize: 16, marginLeft: 9 }}>KLPG20035</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <EvilIcons name="location" color="gray" size={24} />
          <Text style={{ marginLeft: 2, bottom: 2 }}>
            Jl. Raya Kalibata Rt.9/rw.4, Pancoran, Rawa Jati, Jakarta selatan
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text>Harga Sewa</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}>
            Rp 46.000.000
          </Text>
          <Text>/ tahun</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  nameIDContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
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
