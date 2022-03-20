import { React, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Stylesheet,
  Button,
  Image,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

const RecruiterCommunicationScreen = ({ navigation }) => {
  //find number of "right to represent" messages for this recruiter
  let numMessages = 8;
  const [userName, setName] = useState("Shaun");

  const [items, setItems] = useState([
    { name: "TURQUOISE", code: "#1abc9c" },
    { name: "EMERALD", code: "#2ecc71" },
    { name: "PETER RIVER", code: "#3498db" },
    { name: "AMETHYST", code: "#9b59b6" },
    { name: "WET ASPHALT", code: "#34495e" },
    { name: "GREEN SEA", code: "#16a085" },
    { name: "NEPHRITIS", code: "#27ae60" },
    { name: "BELIZE HOLE", code: "#2980b9" },
    { name: "WISTERIA", code: "#8e44ad" },
    { name: "MIDNIGHT BLUE", code: "#2c3e50" }, //testing out different colors
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
    <View
      style={{
        flex: 1, //move to styles
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
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
                communicateTo: item, //send the Contractor info to the textscreen page
              });
            }}
          >
            <View style={styles.chatButton}>
              <Text style={styles.textBox}>Example message box</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
            <Image
              style={styles.profilePicture}
              source={require("./assets/logoPlaceHolder.png")}
            />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        title="Hello"
        onPress={() => {
          Alert.alert(
            "Alert",
            'There would be a textbox here for the reruiter to ask the contractor for certain things, this is in development and can be found in the "designRepresentRequestScreen" file'
          );
        }}
        style={styles.rightToRepresentButton}
      >
        <Image
          style={styles.image}
          source={require("./assets/White_plus.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  chatButton: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  gridView: {
    marginTop: 5,
    flex: 1,
  },
  image: {
    height: 30,
    width: 30,
    alignSelf: "center",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  itemContainer: {
    justifyContent: "space-between",
    borderRadius: 5,
    padding: 10,
    height: 90,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
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
  rightToRepresentButton: {
    position: "absolute",
    backgroundColor: "#3498db",
    height: 55,
    width: 55,
    bottom: "3%",
    right: "7%",
    alignSelf: "flex-end",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 10,
  },
  textBox: {
    fontWeight: "600",
    fontSize: 20,
    color: "#fff",
  },
});
export default RecruiterCommunicationScreen;
