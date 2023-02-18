import { StyleSheet, Text, View, Button, Image } from "react-native";

const Example = () => {
    const listAvatar = [
        "https://reqres.in/img/faces/1-image.jpg",
        "https://reqres.in/img/faces/2-image.jpg",
        "https://reqres.in/img/faces/3-image.jpg"
    ]
    const names = [
        "George",
        "Janet",
        "Emma"
    ]
  return (
    <View style={styles.container}>
      {listAvatar.forEach(
        <Image
        source={{ uri: listAvatar }}
        style={{ height: 200, width: 200, margin: 16 }}
      />
      )}
      {names.forEach(
        <Text style={{ fontSize: 18, margin: 16 }}> {names} </Text>
      )}
      <Button title="Get User" onPress={getUser} style={{ margin: 16 }} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#fbfaff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Example
