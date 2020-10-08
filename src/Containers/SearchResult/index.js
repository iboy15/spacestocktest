import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  ImageBackground,
} from "react-native";
import _ from "lodash";
import { dummy } from "../../Constants/dummy";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../../Config/colors";
import { formatMoney, height, IPHONEX, width } from "../../Utils";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native-gesture-handler";
const SearchResult = ({}) => {
  const [showFilter, setShowFilter] = useState(false);

  const [filterState, setFilterState] = useState({
    data: dummy,
    rentType: "sewa",
    hargaMin: "",
    hargaMax: "",
    sortType: "Rekomendasi",
  });
  const dropDownItems = [
    { label: "Rekomendasi", value: "Rekomendasi" },
    { label: "A - Z", value: "A - Z" },
    { label: "Z - A", value: "Z - A" },
    { label: "Harga Terendah", value: "Harga Terendah" },
    { label: "Harga Tertinggi", value: "Harga Tertinggi" },
  ];

  useEffect(() => {
    const arr = filterSellType("sewa");
    setFilterState({ ...filterState, data: arr });
  }, []);

  const sortData = (item, myData) => {
    if (item == "Rekomendasi") {
      return myData;
    } else if (item == "A - Z") {
      const arr = _.orderBy(myData, ["name"], ["asc"]);
      return arr;
    } else if (item == "Z - A") {
      const arr = _.orderBy(myData, ["name"], ["desc"]);
      return arr;
    } else if (item == "Harga Terendah") {
      const arr = _.orderBy(myData, ["price"], ["asc"]);
      return arr;
    } else if (item == "Harga Tertinggi") {
      const arr = _.orderBy(myData, ["price"], ["desc"]);
      return arr;
    }
  };

  const filterSellType = (rentType) => {
    if (rentType == "sewa") {
      const arr = dummy.filter((item) => item.sellType == 0);

      return arr;
    } else {
      const arr = dummy.filter((item) => item.sellType == 1);

      console.log(arr);
      return arr;
    }
  };

  const doFilter = (rentType, sortType, hargaMin, hargaMax) => {
    const filter1 = filterSellType(rentType);
    const filter2 = sortData(sortType, filter1);
    if (hargaMin != "" && hargaMax == "") {
      const filter3 = FilterMinPrice(filter2, hargaMin);
      setFilterState({
        data: filter3,
        rentType: rentType,
        hargaMin,
        hargaMax,
        sortType,
      });
    } else if (hargaMax != "" && hargaMin == "") {
      const filter3 = FilterMaxPrice(filter2, hargaMax);
      setFilterState({
        data: filter3,
        rentType: rentType,
        hargaMin,
        hargaMax,
        sortType,
      });
    } else if (hargaMin != "" && hargaMax != "") {
      console.log(hargaMin, hargaMax);
      const filter3 = FilterMinPrice(filter2, hargaMin);
      const filter4 = FilterMinPrice(filter3, hargaMax);
      setFilterState({
        data: filter4,
        rentType: rentType,
        hargaMin,
        hargaMax,
        sortType,
      });
    } else
      setFilterState({
        data: filter2,
        rentType: rentType,
        hargaMin,
        hargaMax,
        sortType,
      });
  };

  const FilterMinPrice = (currData, text) => {
    const arr = currData.filter((item) => item.price > parseInt(text));
    return arr;
  };

  const FilterMaxPrice = (currData, text) => {
    const arr = currData.filter((item) => item.price < parseInt(text));
    return arr;
  };

  const ModalFilter = () => {
    return (
      <Modal
        visible={showFilter}
        onRequestClose={() => setShowFilter(false)}
        animationType="slide"
        transparent
      >
        <TouchableOpacity
          onPress={() => setShowFilter(false)}
          style={{
            width,
            height,
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />
        <View style={styles.modalContainer}>
          <View style={styles.topRowContainer}>
            <TouchableOpacity
              onPress={() => {
                setFilterState({
                  data: dummy,
                  rentType: true,
                  hargaMin: "",
                  hargaMax: "",
                  sortType: "Rekomendasi",
                });
              }}
            >
              <Text style={{ color: colors.main }}>Reset Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: 5 }}
              onPress={() => setShowFilter(false)}
            >
              <AntDesign name="close" size={24} color={colors.main} />
            </TouchableOpacity>
          </View>

          <View style={styles.rowInputContainer}>
            <View style={{ width: "45%" }}>
              <Text>Harga Min.</Text>
              <TextInput
                style={styles.textInputContainer}
                value={filterState.hargaMin}
                onChangeText={(text) =>
                  doFilter(
                    filterState.rentType,
                    filterState.sortType,
                    text,
                    filterState.hargaMax
                  )
                }
                placeholder="Tanpa min harga"
              />
            </View>
            <View style={{ width: "45%" }}>
              <Text>Harga Max.</Text>
              <TextInput
                style={styles.textInputContainer}
                value={filterState.hargaMax}
                onChangeText={(text) =>
                  doFilter(
                    filterState.rentType,
                    filterState.sortType,
                    filterState.hargaMin,
                    text
                  )
                }
                placeholder="Tanpa max harga"
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const renderItem = React.useCallback(({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={{ marginBottom: 15, borderRadius: 15, overflow: "hidden" }}
        >
          <ImageBackground
            source={{ uri: item.images }}
            style={{ height: height / 3, width: width - 40 }}
          >
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,0.4)",
                paddingHorizontal: 15,
                paddingVertical: 10,
                width: "100%",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  right: 7,
                }}
              >
                <EvilIcons name="location" color="white" size={24} />
                <Text style={{ color: "white" }}>{item.city}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>
                  {item.stock} Unit Tersedia
                </Text>
                <View>
                  <Text style={{ color: "white" }}>
                    Mulai{" "}
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      {formatMoney(item.price)}{" "}
                    </Text>
                    {item.sellType == 1 ? "" : "/ tahun"}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </>
    );
  }, []);

  return (
    <>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: IPHONEX ? 45 : 15,
          paddingBottom: 50,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", zIndex: 10 }}
        >
          <TouchableOpacity
            onPress={() => setShowFilter(true)}
            style={{
              borderRadius: 8,
              backgroundColor: colors.main,
              paddingVertical: 7,
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ color: "white" }}>Filter</Text>
          </TouchableOpacity>

          <Text style={{ marginLeft: "auto", marginRight: 10 }}>Urutkan :</Text>
          <View>
            <DropDownPicker
              items={dropDownItems}
              defaultValue={filterState.sortType}
              containerStyle={{ height: 40, marginTop: 7, width: width / 3 }}
              style={{ backgroundColor: "#fafafa" }}
              itemStyle={styles.dropDownItemStyle}
              dropDownStyle={{ backgroundColor: "#fafafa" }}
              onChangeItem={(item) =>
                doFilter(
                  filterState.rentType,
                  item.value,
                  filterState.hargaMin,
                  filterState.hargaMax
                )
              }
            />
          </View>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <View>
            <Text>Hasil Pencarian Apartemen</Text>
            <Text style={{ marginTop: 5 }}>
              <Text style={{ color: colors.main }}>
                {filterState.data.length}
              </Text>{" "}
              Kompleks ditemukan
            </Text>
          </View>
          <View style={styles.rentOptionContainer}>
            <TouchableOpacity
              onPress={() =>
                doFilter(
                  "sewa",
                  filterState.sortType,
                  filterState.hargaMin,
                  filterState.hargaMax
                )
              }
              style={[
                styles.rentBtnContainer,
                {
                  backgroundColor:
                    filterState.rentType == "sewa" ? colors.main : "white",
                },
              ]}
            >
              <Text
                style={{
                  color: filterState.rentType == "sewa" ? "white" : "black",
                  textAlign: "center",
                }}
              >
                Sewa
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                doFilter(
                  "beli",
                  filterState.sortType,
                  filterState.hargaMin,
                  filterState.hargaMax
                )
              }
              style={[
                styles.rentBtnContainer,
                {
                  backgroundColor:
                    filterState.rentType == "sewa" ? "white" : colors.main,
                },
              ]}
            >
              <Text
                style={{
                  color: filterState.rentType == "sewa" ? "black" : "white",
                  textAlign: "center",
                }}
              >
                Beli
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          style={{ marginTop: 20 }}
          keyExtractor={(item, index) => index.toString()}
          data={filterState.data}
          renderItem={renderItem}
        />
      </View>
      {ModalFilter()}
    </>
  );
};
const styles = StyleSheet.create({
  topRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width,
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: colors.main,
  },
  rowInputContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    marginBottom: 30,
  },
  textInputContainer: {
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 3,
    paddingVertical: 10,
    borderWidth: 1,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 10,
    marginTop: 5,
    borderRadius: 8,
    alignItems: "center",
  },

  dropDownItemStyle: {
    justifyContent: "flex-start",
  },
  rentOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.main,
    marginTop: 7,
    overflow: "hidden",
    width: width / 3,
    marginLeft: "auto",
    zIndex: 1,
  },
  rentBtnContainer: {
    width: "50%",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default SearchResult;
