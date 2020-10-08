import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { IPHONEX, width } from "../../../Utils";
import AutoHeightImage from "react-native-auto-height-image";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

const unitImage = [
  require("../../../Assets/Images/apartemen/kalibatacitygreen2.jpg"),
  require("../../../Assets/Images/apartemen/kalibatacitygreen3.jpg"),
  require("../../../Assets/Images/apartemen/kalibatacitygreenInterior.jpg"),
  require("../../../Assets/Images/no-image.jpg"),
];
const Top = ({}) => {
  return (
    <>
      <TouchableOpacity>
        <AutoHeightImage
          width={width}
          source={require("../../../Assets/Images/apartemen/kalibatacitygreen.jpg")}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        {unitImage.map((item, index) => {
          if (index < 4) {
            return (
              <TouchableOpacity key={index.toString()}>
                <AutoHeightImage source={item} width={width / 4} />
                {index == 3 && (
                  <View style={styles.listImageContainer}>
                    <Entypo name="plus" size={35} color="white" />
                    <Text style={styles.textMore}>Lihat Lebih bnyak</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          }
        })}
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: IPHONEX ? 40 : 20,
          left: 15,
        }}
      >
        <AntDesign name="left" size={27} color="white" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  listImageContainer: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  textMore: {
    fontSize: 12,
    color: "white",
    marginTop: 3,
  },
});
export default Top;
