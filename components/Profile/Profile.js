import { Avatar, ScrollView, Wrap } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import authstore from "../../Store/authStore";
import tripStore from "../../Store/tripStore";
import ProfileTrips from "./ProfileTrips";
import profileStore from "../../Store/profileStore";
import { observer } from "mobx-react";
import Icon from "react-native-vector-icons/AntDesign";

const Profile = ({ route, navigation }) => {
  // const ownerid = route.params?.ownerid;
  if (route.params?.ownerid) {
    ownerid = route.params?.ownerid;
  } else {
    ownerid = authstore.user.id;
  }
  const userprofile = profileStore.profile.find(
    (user) => user.owner._id === ownerid
  );
  console.log(
    "🚀 ~ file: Profile.js ~ line 22 ~ Profile ~ userprofile",
    userprofile
  );

  if (profileStore.loading || authstore.loading) {
    <Text>Loading</Text>;
  }
  // if (ownerid) {
  //   user = ownerid;
  // } else {
  //   user = authstore.user.id;
  // }

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
            <Text style={styles.usertitle}>{userprofile.owner.username}</Text>
            <Text style={styles.email}>{userprofile.owner.email}</Text>
          </View>

          {authstore.user && authstore.user.id === userprofile.owner._id && (
            <View style={styles.editprofile}>
              <Icon.Button
                onPress={() => {
                  navigation.navigate("UpdateProfileForm", {
                    userinfo: userprofile,
                  });
                }}
                name="profile"
              />
              <Text>Edit Profile</Text>
            </View>
          )}
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
  editprofile: {},
});
