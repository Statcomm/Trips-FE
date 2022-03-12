import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { observer } from "mobx-react";
import { Input, Button, useToast, Spinner } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import authstore from "../../Store/authStore";
import tripStore from "../../Store/tripStore";
import * as ImagePicker from "expo-image-picker";

const AddTripForm = ({ navigation }) => {
  if (tripStore.loading) {
    <View style={styles.center}>
      <Spinner />
    </View>;
  }
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
  //   const handleImage = (event) => {
  //     setTrip({ ...trip, image: event });
  //   };
  const handleDescrip = (event) => {
    setTrip({ ...trip, description: event });
  };
  const toast = useToast();

  const handleSubmit = () => {
    tripStore.createTrip(trip, navigation, toast);
    setTrip({
      title: "",
      location: "",
      image: "",
      description: "",
    });
  };

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Assume "photo" is the name of the form field the server expects
    setTrip({ ...trip, image: localUri });
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

        <TouchableOpacity onPress={openImagePickerAsync} style={styles.addBtn}>
          <Text style={styles.photoTxtBtn}>Choose a Photo</Text>
        </TouchableOpacity>

        <Text style={styles.label}>
          <Icon name="file-text" /> Description:
        </Text>
        <Input
          value={trip.description}
          h={120}
          borderColor={"black"}
          multiline={true}
          onChangeText={handleDescrip}
        />
      </View>
      <Button onPress={handleSubmit} style={styles.addtripbttn}>
        <Text style={styles.addtriptxt}>Add New Trip </Text>
      </Button>
    </ScrollView>
  );
};

export default observer(AddTripForm);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
    display: "flex",
    alignContent: "center",
    paddingTop: 10,
    alignItems: "flex-end",
  },
  photoTxtBtn: {
    alignSelf: "center",
    margin: 20,
    backgroundColor: "#8E9A69",
    color: "white",
    borderRadius: 20,
    width: "60%",
    height: 35,
    marginTop: 5,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 3,
  },
  addtripbttn: {
    alignSelf: "center",
    margin: 20,
    backgroundColor: "#8E9A69",
    color: "white",
    borderRadius: 20,
    width: "60%",
    height: 40,
    marginTop: 20,
    textAlign: "center",
    fontSize: 25,
    paddingTop: 6,
  },
  addtriptxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
