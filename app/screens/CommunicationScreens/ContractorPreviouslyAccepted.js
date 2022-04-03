import { React } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const contractorPastRequests = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/background.jpg")}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default contractorPastRequests;
