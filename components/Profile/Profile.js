import { Avatar } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import authstore from "../../Store/authStore";
import tripStore from "../../Store/tripStore";

const Profile = (userid, navigation) => {
  const usertrips = tripStore.trips.filter(
    (owner) => owner._id === authstore.user._id
  );
  console.log(authstore.user.id);
  console.log(usertrips);
  // const profiletripList = usertrips.trips.map((trip) => (
  //   <TripItem trip={trip} key={trip._id} navigation={navigation} />
  // ));
  return (
    <View>
      <View style={styles.toppart}>
        <Avatar w={20} h={20} style={styles.avatar}></Avatar>
        <View style={styles.topparttext}>
          <Text style={styles.usertitle}>{authstore.user.username} </Text>
          <Text style={styles.email}>{authstore.user.email}</Text>
        </View>
      </View>
      <View style={styles.divider}>
        <Text style={styles.biotitle}>About me:</Text>
        <Text style={styles.biodescription}>
          Ipsum Lopsum Ipsum Lopsum Ipsum Lopsum Ipsum Lopsum Ipsum Lopsum Ipsum
          Lopsum Ipsum Lopsum Ipsum Lopsum Ipsum Lopsum Ipsum Lopsum Ipsum
          Lopsum Ipsum Lopsum Ipsum Lopsum Ipsum Lopsum
        </Text>
      </View>
      <View style={styles.divider}>
        <Text style={styles.triplist}>My Trips:</Text>
        {/* {profiletripList} */}
      </View>
    </View>
  );
};

export default Profile;

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
});
