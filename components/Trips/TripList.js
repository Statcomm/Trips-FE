import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import tripStore from "../../Store/tripStore";
import TripItem from "./TripItem";
import Icon from "react-native-vector-icons/FontAwesome";
import { observer } from "mobx-react";
import { Input } from "native-base";

const TripList = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const tripList = tripStore.trips
    .filter((trip) => trip.title.toLowerCase().includes(query.toLowerCase()))
    .map((trip) => (
      <TripItem trip={trip} key={trip._id} navigation={navigation} />
    ));

  const handleChange = (event) => {
    if (event.length >= 2) setQuery(event);
    else setQuery("");
  };

  if (tripStore.loading) {
    <Text>Loading</Text>;
  }

  return (
    <View>
      <View style={styles.searchBar}>
        <Input
          w={350}
          h={39}
          borderColor="#D1D1D1"
          borderRadius={30}
          placeholder="Search..."
          onChangeText={(event) => handleChange(event)}
          InputLeftElement={
            <View style={styles.searchIcon}>
              <Icon name="search" marginLeft={1} size={23} alignSelf="center" />
            </View>
          }
        />
      </View>
      <ScrollView alwaysBounceVertical={true}>{tripList}</ScrollView>
    </View>
  );
};

export default observer(TripList);

const styles = StyleSheet.create({
  searchBar: {
    margin: 10,

    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: "#F2F2F2",
  },
  searchIcon: {
    borderRadius: 30,
    width: 35,
    height: 35,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
