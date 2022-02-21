import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import tripStore from "../../Store/tripStore";
import TripItem from "./TripItem";
import { observer } from "mobx-react";

const TripList = ({ navigation }) => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip._id} navigation={navigation} />
  ));
  if (tripStore.loading) {
    <Text>Loading</Text>;
  }
  return (
    <View>
      <ScrollView alwaysBounceVertical={true}>{tripList}</ScrollView>
    </View>
  );
};

export default observer(TripList);

const styles = StyleSheet.create({});
