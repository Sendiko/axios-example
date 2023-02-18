import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import axios from "axios";
import { useState } from "react";
import Example from "./example";

const url = "https://reqres.in/api";
export default function App() {
  const [num, setNum] = useState(1);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [listAvatar, setListAvatar] = useState(Array(""));

  const getUser = async () => {
    await axios
      .get(`${url}/users/${num}`)
      .then((response) => {
        setName("" + response.data.data.first_name);
        setAvatar("" + response.data.data.avatar);
        console.log(avatar);
        console.log(response.status);
        console.log(num);
        console.log(response.data);
        setNum(num + 1);
        if (num == 12) {
          setNum(1);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={{ uri: avatar }}
        style={{ height: 200, width: 200, margin: 16 }}
      />
      <Text style={{ fontSize: 18, margin: 16 }}> {name} </Text>
      <Button title="Get User" onPress={getUser} style={{ margin: 16 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fbfaff",
    alignItems: "center",
    justifyContent: "center",
  },
});
