import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, ScrollView, Spinner, useToast } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import tripStore from "../../Store/tripStore";
import authstore from "../../Store/authStore";
import { observer } from "mobx-react";

const DetailsTrip = ({ route, navigation }) => {
  const trip = route.params.trip;

  const toast = useToast();
  //TODO Spinner For fetching
  if (tripStore.loading) {
    <View style={styles.center}>
      <Spinner accessibilityLabel="Loading" />{" "}
    </View>;
  }
  return (
    <Pressable>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: trip.image,
            }}
            style={styles.detailimage}
          />
          <Text style={styles.detailtitles}>{trip.title}</Text>
          <Text style={styles.detailsubtitles}>{trip.location}</Text>

          {/* Owner */}

          <View style={styles.detailsavatar}>
            <Pressable
              style={styles.detailsavatar}
              onPress={() =>
                navigation.navigate("Profile", {
                  ownerid: trip.owner._id,
                })
              }
            >
              <Avatar
                borderWidth={1}
                source={{
                  uri: trip.owner.image,
                }}
              />
              <Text style={styles.detailsubtitles}>{trip.owner.username}</Text>
            </Pressable>
            {authstore.user && authstore.user.id === trip.owner._id && (
              <View style={styles.addUpdate}>
                <View style={styles.btn}>
                  <Icon.Button
                    onPress={() =>
                      tripStore.deleteTrip(trip._id, navigation, toast)
                    }
                    marginLeft={5}
                    name="delete"
                    backgroundColor="#B94040"
                  />
                </View>

                <View style={styles.btn}>
                  <Icon.Button
                    onPress={() => {
                      navigation.navigate("UpdateTrip", { tripId: trip });
                    }}
                    marginLeft={5}
                    name="edit"
                    backgroundColor="#909A6D"
                  />
                </View>
              </View>
            )}
          </View>

          {/* Description */}
          <Text style={styles.detaildescription}>{trip.description}</Text>
        </View>
      </ScrollView>
    </Pressable>
  );
};

export default observer(DetailsTrip);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  detailimage: {
    width: "95%",
    height: 300,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 8,
  },
  detailtitles: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 10,
    marginLeft: 10,
  },
  detailsubtitles: {
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: "bold",
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
    marginTop: 10,
    marginLeft: 7,
  },
  addUpdate: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 160,
    marginTop: 10,
  },
  btn: {
    marginRight: 4,
  },
});
