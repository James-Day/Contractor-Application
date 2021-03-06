import { React, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Stylesheet,
  Button,
  StatusBar,
  Platform,
  TextInput,
  Alert,
  Image,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

const TextScreen = ({ route, navigation }) => {
  const { communicateTo } = route.params;
  const [chat, setChat] = useState("");

  return (
    <View style={styles.background}>
      <View style={styles.titleName}>
        <Text style={styles.name}>{communicateTo.name}</Text>
        <Image
          style={styles.profilePicture}
          source={require("./assets/logoPlaceHolder.png")}
        ></Image>
      </View>
      <View style={styles.chats}></View>
      <View style={styles.text}>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <TextInput
            style={styles.messageBox}
            placeholder="Send a chat"
            placeholderTextColor="grey"
            maxLength={500}
            onChangeText={(val) => setChat(val)}
          />

          <TouchableOpacity
            title="Hello"
            onPress={() => {
              Alert.alert("Alert", "This will send the message using my api"); //will render chat in chat textbox (not sure how I'll save it yet)
            }}
            style={styles.sendButton}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  chats: { flex: 0.8, width: "100%", borderColor: "black", borderWidth: 1 },
  messageBox: {
    marginLeft: 10,
    width: "70%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    marginRight: 10,
    alignSelf: "center",
  },
  sendButton: {
    backgroundColor: "#3498db",
    height: 40,
    width: 80,
    marginRight: 10,
    borderRadius: 20,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonText: {
    color: "white",
    bottom: 2,
  },
  text: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    flex: 0.1,
  },
  titleName: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default TextScreen;
