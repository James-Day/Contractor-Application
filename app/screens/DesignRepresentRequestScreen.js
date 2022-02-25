import { React } from "react";
import {} from "react-native";

const DesignRepresentRequest = ({ route, navigation }) => {
  const { communicateTo } = route.params;

  return <View style={styles.background}></View>; //I'm not sure if I actually want this screen or not yet
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    top: 30,
  },
});
export default DesignRepresentRequest;
