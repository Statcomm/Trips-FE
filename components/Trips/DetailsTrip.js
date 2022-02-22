import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, ScrollView, Spinner, useToast } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import tripStore from "../../Store/tripStore";
import authstore from "../../Store/authStore";
import { observer } from "mobx-react";

const DetailsTrip = ({ route, navigation }) => {
  console.log(
    "🚀 ~ file: DetailsTrip.js ~ line 11 ~ DetailsTrip ~ route",
    route
  );
  const trip = route.params.trip;

  const toast = useToast();
  //TODO Spinner For fetching
  if (tripStore.loading) {
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        justifyContent: "center",
      }}
    >
      <Spinner />
    </View>;
  }
  return (
    <SafeAreaView>
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

            {/* Owner */}

            <View>
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
                <Text style={styles.detailsubtitles}>
                  {trip.owner.username}
                </Text>
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
                      backgroundColor="red"
                    />
                  </View>

                  <View style={styles.btn}>
                    <Icon.Button
                      onPress={() => {
                        navigation.navigate("UpdateTrip", { tripId: trip });
                      }}
                      marginLeft={5}
                      name="edit"
                      backgroundColor="green"
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
    </SafeAreaView>
  );
};

export default observer(DetailsTrip);

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
    marginLeft: 15,
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
    marginLeft: 20,
  },
  addUpdate: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 120,
  },
  btn: {
    marginRight: 4,
  },
});
