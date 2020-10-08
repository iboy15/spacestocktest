import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../../../Config/colors";
import { width } from "../../../Utils";

const TowerAvailable = ({}) => {
  return (
    <>
      <View style={styles.containers}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Daftar Tower</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Tower Damar</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Tower Gaharu</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Tower Cendan</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Tower Flamboyan</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Tower Akasia</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Tower Asoka</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containers: {
    backgroundColor: "#FBFBFB",
    paddingVertical: 10,

    paddingHorizontal: 15,
  },
  itemContainer: {
    padding: 10,
    borderColor: colors.main,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 15,
    marginBottom: 15,
  },
  itemText: { color: colors.main, fontWeight: "bold" },
});
export default TowerAvailable;
