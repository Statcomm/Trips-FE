import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { observer } from "mobx-react";
import { Input, Button, useToast } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import authstore from "../../Store/authStore";
import profileStore from "../../Store/profileStore";

const UpdateProfileForm = ({ route }) => {
  if (profileStore.loading) {
    <Text>Loading</Text>;
  }
  const profile2 = route.params.userinfo;

  const [profile, setProfile] = useState({
    _id: profile2._id,
    image: profile2.image,
    bio: profile2.bio,
  });

  const handleImage = (event) => {
    setProfile({ ...profile, image: event });
  };
  const handleBio = (event) => {
    setProfile({ ...profile, bio: event });
  };
  const toast = useToast();

  const handleSubmit = () => {
    profileStore.updateProfile(profile);
    setProfile({
      image: "",
      bio: "",
    });
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Update Profile</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>
          <Icon name="image" /> Image:
        </Text>
        <Input
          h={10}
          borderColor={"black"}
          onChangeText={handleImage}
          value={profile.image}
          multiline={true}
        />

        <Text style={styles.label}>
          <Icon name="file-text" /> Bio:
        </Text>
        <Input
          multiline={true}
          value={profile.bio}
          borderColor={"black"}
          onChangeText={handleBio}
        />
      </View>
      <Button onPress={handleSubmit} style={styles.addBtn}>
        Update Profile
      </Button>
    </ScrollView>
  );
};

export default observer(UpdateProfileForm);

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
