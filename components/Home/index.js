import React from "react";
import { Button, Spinner } from "native-base";

import { StyleSheet, Text, View, ImageBackground } from "react-native";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://wildlandtrekking.com/content/uploads/2020/03/image1-33.jpg",
      }}
      style={styles.bgHome}
    >
      <View style={styles.inHome}>
        <Text style={styles.homeTitle}> Travel's a Hoot!</Text>

        <Button
          onPress={() => navigation.replace("TripList")}
          style={styles.homebtn}
        >
          <Text style={styles.traveltxt}> See the world! </Text>
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  bgHome: {
    width: "100%",
    height: "100%",
  },
  inHome: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.3)",
  },
  homebtn: {
    width: "75%",
    height: 50,
    backgroundColor: "#8E9A69",
    borderRadius: 20,
  },
  traveltxt: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  homeTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginBottom: 100,
  },
});
