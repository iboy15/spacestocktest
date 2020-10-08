import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../../Config/colors";
import { width } from "../../../Utils";
import Carousel from "react-native-snap-carousel";
import AutoHeightImage from "react-native-auto-height-image";

const listImages = [
  {
    nama: "2 BR Tower Gaharu",
    image:
      "https://res.cloudinary.com/dpqdlkgsz/image/private/t_aparecium_minima_x/building/gn1576hzwsahw851k4ok",
  },

  {
    nama: "2 BR Tower Cendana",
    image:
      "https://res.cloudinary.com/dpqdlkgsz/image/private/t_aparecium_minima_x/building/ftlqoqxhdlucragd0nl8",
  },
  {
    nama: "2 BR Tower Flamboyan",
    image:
      "https://res.cloudinary.com/dpqdlkgsz/image/private/t_aparecium_minima_x/building/hquuhmhfq517ykb0rtzy",
  },
  {
    nama: "2 BR Tower Akasia",
    image:
      "https://res.cloudinary.com/dpqdlkgsz/image/private/t_aparecium_minima_x/building/gn1576hzwsahw851k4ok",
  },
  {
    nama: "1 BR Tower Gaharu",
    image:
      "https://res.cloudinary.com/dpqdlkgsz/image/private/t_aparecium_minima_x/building/y2lisaibxmyvyz7m83zm",
  },
];

const UnitAvailable = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailUnit", { data: item })}
        style={styles.imgContainer}
      >
        <AutoHeightImage source={{ uri: item.image }} width={width / 3} />
        <Text
          style={{
            position: "absolute",
            bottom: 10,
            marginHorizontal: 10,

            color: "white",
            fontWeight: "bold",
          }}
        >
          {item.nama}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.containers}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sewa Unit</Text>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Carousel
            activeSlideAlignment={"start"}
            data={listImages}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width / 3 + 10}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}

            // autoplay
            // loop
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containers: {
    backgroundColor: "#FBFBFB",
    paddingVertical: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: colors.main,
    borderRadius: 8,
    marginRight: 15,
    marginBottom: 15,
  },
  imgContainer: {
    borderRadius: 8,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  itemText: { color: "white", fontWeight: "bold" },
});
export default UnitAvailable;
