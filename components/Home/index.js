import React from "react";
import { Button } from "native-base";

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
        <Text style={styles.homeTitle}>Welcome To Compass</Text>

        <Button
          onPress={() => navigation.navigate("TripList")}
          style={styles.homebtn}
        >
          Let's Get Started
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
  },
  homebtn: {
    width: "90%",
    height: 50,
    backgroundColor: "#8E9A69",
  },
  homeTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginBottom: 100,
  },
});
