import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Flex, ScrollView } from "native-base";

const DetailsTrip = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: "https://static.onecms.io/wp-content/uploads/sites/28/2021/02/11/chicago-illinois-CHITG0221.jpg",
            }}
            style={styles.detailimage}
          />
          <Text style={styles.detailtitles}>Chicago, USA:</Text>
          <View style={styles.detailsavatar}>
            <Avatar
              borderWidth={1}
              source={{
                uri: "https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg",
              }}
            />
            <Text style={styles.detailsubtitles}>Offered by USERNAME:</Text>
          </View>
          <Text style={styles.detaildescription}>
            ipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsumipsumlopsum
          </Text>
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
