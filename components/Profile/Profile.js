import { Avatar, ScrollView, Wrap } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import authstore from "../../Store/authStore";
import tripStore from "../../Store/tripStore";
import ProfileTrips from "./ProfileTrips";
import profileStore from "../../Store/profileStore";
import { observer } from "mobx-react";
import Icon from "react-native-vector-icons/Entypo";
import TripItem from "../Trips/TripItem";

const Profile = ({ route, navigation }) => {
  let ownerId = route.params?.ownerid;

  if (route.params?.ownerid) {
    ownerId = route.params?.ownerid;
  } else {
    ownerId = authstore.user.id;
  }

  const userprofile = profileStore.profile.find(
    (user) => user.owner?._id === ownerId
  );
  console.log(
    "🚀 ~ file: Profile.js ~ line 22 ~ Profile ~ userprofile",
    userprofile
  );

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
          <Avatar
            w={20}
            h={20}
            style={styles.avatar}
            source={{ uri: userprofile.owner?.image }}
          />
          <View style={styles.topparttext}>
            <View style={styles.userediting}>
              <Text style={styles.usertitle}>
                {userprofile.owner?.username}
              </Text>
              {authstore.user && authstore.user.id === userprofile.owner?._id && (
                <View style={styles.editprofile}>
                  <Icon
                    style={styles.editprofilebtn}
                    color="gray"
                    backgroundColor={"gray"}
                    borderRadius={20}
                    size={22}
                    onPress={() => {
                      navigation.navigate("UpdateProfileForm", {
                        userinfo: userprofile,
                      });
                    }}
                    name="cog"
                  />
                  {/* <Text>Edit Profile</Text> */}
                </View>
              )}
            </View>
            <Text style={styles.email}>{userprofile.owner?.email}</Text>
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
  editprofile: {
    display: "flex",
    alignContent: "flex-end",
    justifyContent: "center",
    borderRadius: 20,
    width: 50,
    marginLeft: 5,
  },
  editprofilebtn: {
    alignContent: "center",
    borderRadius: 20,
  },
  userediting: {
    display: "flex",
    flexDirection: "row",
  },
});
