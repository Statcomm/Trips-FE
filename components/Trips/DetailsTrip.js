import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Flex, ScrollView } from "native-base";

const DetailsTrip = ({ route }) => {
  const trip = route.params.trip;
  console.log(route);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: trip.image,
            }}
            style={styles.detailimage}
          />
          <Text style={styles.detailtitles}>{trip.title}</Text>
          <View style={styles.detailsavatar}>
            <Avatar
              borderWidth={1}
              source={{
                uri: trip.owner.image,
              }}
            />
            <Text style={styles.detailsubtitles}>{trip.owner.username}</Text>
          </View>
          <Text style={styles.detaildescription}>{trip.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsTrip;

const styles = StyleSheet.create({
  detailimage: {
    width: "95%",
    height: 300,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  detailtitles: {
    fontWeight: "bold",
    fontSize: 35,
    margin: 10,
  },
  detailsubtitles: {
    fontSize: 15,
  },
  detaildescription: {
    fontSize: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: "#d0d0d0",
  },
  detailsview: {
    height: "100%",
    width: "100%",
  },
  detailsavatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    justifyContent: "space-around",
    width: "60%",
  },
});
