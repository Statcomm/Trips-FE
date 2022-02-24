import { Avatar, Divider } from "native-base";
import React from "react";
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import authstore from "../../Store/authStore";
import { LinearGradient } from "expo-linear-gradient";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const TripItem = ({ trip, navigation }) => {
  return (
    <SafeAreaView>
      <Pressable
        onPress={() =>
          navigation.navigate("Profile", {
            ownerid: trip.owner._id,
          })
        }
      >
        <View style={styles.owner}>
          <Avatar
            w={7}
            h={7}
            borderWidth={1}
            source={{
              uri: trip.owner.image,
            }}
          />

          <Text style={styles.ownerText}>{trip.owner.username}</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate("DetailsTrip", {
            trip: trip,
          })
        }
      >
        <View style={styles.oneTrip}>
          <ImageBackground
            borderRadius={20}
            style={styles.tripImage}
            source={{ uri: trip.image }}
          >
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.7)"]}
              style={styles.buttonContainer}
            >
              <Text style={styles.tripTitle}>{trip.title}</Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      </Pressable>

      <Divider my={2} width={300} alignSelf="center" />
    </SafeAreaView>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  tripImage: {
    width: "100%",
    height: "100%",
  },
  oneTrip: {
    width: "97%",
    height: deviceHeight / 5,
    margin: 5,
    backgroundColor: "#F2F2F2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
  },
  buttonContainer: {
    padding: 15,
    borderRadius: 5,
    width: "100%",
    height: "100%",
  },
  tripTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  owner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  ownerText: {
    marginLeft: 10,
    fontWeight: "bold",
  },
});
