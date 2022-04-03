import { React } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
var AcceptRequest = async function (Accepted) {
  let value;
  if (Accepted) {
    value = "Accepted";
  } else {
    value = "Declined";
  }
  let newRequest = [
    {
      op: "replace",
      path: "/email",
      value: value,
    },
  ];
  return fetch(
    //return the promise
    `https://contractorwebapi.azurewebsites.net/api/users/1`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": JSON.stringify(newRequest).length,
      },
      body: JSON.stringify(newRequest),
    }
  );
};
//Change buttons to touchable opacity, and give them a style to properly fit on the screen
const ContractorAnswerRequest = ({ route, navigation }) => {
  const message = route.params.message.message;
  const recruiter = route.params.Recruiter;
  return (
    <View style={styles.background}>
      <View style={styles.inner}>
        <View style={styles.request}>
          <View style={styles.nameBar}>
            <View style={styles.profilePictureView}>
              <Image
                style={styles.profilePicture}
                source={require("./assets/profPic2.jpg")}
              ></Image>
            </View>
            <Text style={styles.nameText}>
              {recruiter.firstName} has asked for the right to represent you:
            </Text>
          </View>
          <View style={styles.message}>
            <Text style={styles.messageText}>{message}</Text>
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            title="Accept"
            style={{
              width: 100,
              height: 30,

              backgroundColor: "white",
              color: "green",
            }}
            onPress={() => {
              AcceptRequest(true);
            }}
          ></TouchableOpacity>
          <Button
            title="Decline"
            onPress={() => {
              AcceptRequest(false);
            }}
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  inner: {
    margin: 10,
    backgroundColor: "#ededed",
    height: "80%",
    width: "80%",
    elevation: 5,
    flexDirection: "column",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "black",
  },
  request: { height: "95%", backgroundColor: "yellow" },
  nameBar: {
    flexDirection: "row",
    height: "20%",
    alignItems: "center",
    margin: 10,
    backgroundColor: "blue",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    width: "80%",
  },
  profilePicture: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 90,
  },
  profilePictureView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "white",
    padding: 2,
    elevation: 5,
  },
  message: {
    backgroundColor: "red",
    margin: 10,
  },
  messageText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default ContractorAnswerRequest;
