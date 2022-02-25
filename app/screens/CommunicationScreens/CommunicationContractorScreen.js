import { React, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Stylesheet,
  Button,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

const ContractorCommunicationScreen = ({ navigation }) => {
  //find number of "right to represent" messages for this contractor
  const [items, setItems] = useState([
    { name: "TURQUOISE", code: "#1abc9c" },
    { name: "EMERALD", code: "#2ecc71" },
    { name: "PETER RIVER", code: "#3498db" },
    { name: "AMETHYST", code: "#9b59b6" },
    { name: "WET ASPHALT", code: "#34495e" },
    { name: "GREEN SEA", code: "#16a085" },
    { name: "NEPHRITIS", code: "#27ae60" }, //Testing out different colors of text messages
    { name: "BELIZE HOLE", code: "#2980b9" },
    { name: "WISTERIA", code: "#8e44ad" },
    { name: "MIDNIGHT BLUE", code: "#2c3e50" },
    { name: "SUN FLOWER", code: "#f1c40f" },
    { name: "CARROT", code: "#e67e22" },
    { name: "ALIZARIN", code: "#e74c3c" },
    { name: "CLOUDS", code: "#ecf0f1" },
    { name: "CONCRETE", code: "#95a5a6" },
    { name: "ORANGE", code: "#f39c12" },
    { name: "PUMPKIN", code: "#d35400" },
    { name: "POMEGRANATE", code: "#c0392b" },
    { name: "SILVER", code: "#bdc3c7" },
    { name: "ASBESTOS", code: "#7f8c8d" },
    { name: "bruh", code: "#7f8c8c" },
  ]);

  return (
    <FlatGrid
      itemDimension={300}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.itemContainer, { backgroundColor: item.code }]}
          onPress={() => {
            return navigation.navigate("TextScreen", {
              communicateTo: item, //send the recruiter info to the textscreen page
            });
          }}
        >
          <View style={styles.chatButton}>
            <Text style={styles.textBox}>Example message box</Text>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
            <Image
              style={styles.profilePicture}
              source={require("./assets/logoPlaceHolder.png")}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  chatButton: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 90,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  profilePicture: {
    height: 40,
    width: 40,
    alignSelf: "center",
  },
});
export default ContractorCommunicationScreen;
