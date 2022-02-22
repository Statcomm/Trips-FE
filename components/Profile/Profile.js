import { Avatar, ScrollView, Wrap } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import authstore from "../../Store/authStore";
import tripStore from "../../Store/tripStore";
import ProfileTrips from "../Trips/ProfileTrips";
import profileStore from "../../Store/profileStore";
import { observer } from "mobx-react";

const Profile = ({ route, navigation }) => {
  if (route.params?.ownerid) {
    ownerid = route.params?.ownerid;
  } else {
    ownerid = authstore.user.id;
  }
  // const ownerid = route.params?.ownerid;
  const userprofile = profileStore.profile.find(
    (user) => user.owner._id === ownerid
  );

  // if (ownerid) {
  //   user = ownerid;
  // } else {
  //   user = authstore.user.id;
  // }

  const userprofile = profileStore.profile.find(
    (prof) => prof.owner._id === user
  );
  // const profiledetails = tripStore.trips.find(
  //   (trip) => trip.owner._id === user
  // );

  const usertrips = userprofile.trips.map((trip) => (
    <ProfileTrips trip={trip} key={trip._id} navigation={navigation} />
  ));

  return (
    <ScrollView>
      <View>
        <View style={styles.toppart}>
          <Avatar w={20} h={20} style={styles.avatar}></Avatar>
          <View style={styles.topparttext}>
            <Text style={styles.usertitle}>{/*---------*/}</Text>
            <Text style={styles.email}>{/*---------*/}</Text>
          </View>
        </View>
        <View style={styles.divider}>
          <Text style={styles.biotitle}>About me:</Text>
          <Text style={styles.biodescription}>{userprofile.bio}</Text>
        </View>
        <View style={styles.divider}>
          <Text style={styles.biotitle}>My Trips:</Text>
          <View style={styles.listcontainer}>{usertrips}</View>
        </View>
      </View>
    </ScrollView>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({
  toppart: {
    margin: 5,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 225,
  },
  topparttext: {
    padding: 5,
    margin: 5,
  },
  avatar: {
    margin: 10,
    padding: 10,
  },
  usertitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 15,
  },
  biotitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  biodescription: {},
  triplist: {
    fontSize: 25,
    fontWeight: "bold",
  },
  divider: {
    margin: 10,
    padding: 2,
  },
  listcontainer: {
    margin: 10,
    padding: 2,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
