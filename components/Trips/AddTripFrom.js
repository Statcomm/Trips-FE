import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { Input, Button, useToast } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import authstore from "../../Store/authStore";
import tripStore from "../../Store/tripStore";

const AddTripFrom = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    location: "",
    image: "",
    description: "",
  });

  const handleTitle = (event) => {
    setTrip({ ...trip, title: event });
  };
  const handleLocation = (event) => {
    setTrip({ ...trip, location: event });
  };
  const handleImage = (event) => {
    setTrip({ ...trip, image: event });
  };
  const handleDescrip = (event) => {
    setTrip({ ...trip, description: event });
  };
  const toast = useToast();

  const handleSubmit = () => {
    tripStore.createTrip(trip, navigation, toast);
    usetrip({
      title: "",
      location: "",
      image: "",
      description: "",
    });
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Add New Trip</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>
          <Icon name="modx" /> Title:
        </Text>
        <Input
          value={trip.title}
          h={10}
          borderColor={"black"}
          onChangeText={handleTitle}
        />

        <Text style={styles.label}>
          <Icon name="map-signs" /> Location:
        </Text>
        <Input
          type="text"
          h={10}
          borderColor={"black"}
          onChangeText={handleLocation}
          value={trip.location}
        />

        <Text style={styles.label}>
          <Icon name="image" /> Image:
        </Text>
        <Input
          h={10}
          borderColor={"black"}
          onChangeText={handleImage}
          value={trip.image}
        />

        <Text style={styles.label}>
          <Icon name="file-text" /> Description:
        </Text>
        <Input
          value={trip.description}
          h={120}
          borderColor={"black"}
          onChangeText={handleDescrip}
        />
      </View>
      <Button onPress={handleSubmit} style={styles.addBtn}>
        Add New Trip
      </Button>
    </ScrollView>
  );
};

export default observer(AddTripFrom);

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    margin: 20,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  form: {
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
  addBtn: {
    width: "80%",
    alignSelf: "center",
    margin: 20,
    backgroundColor: "#8E9A69",
  },
});
