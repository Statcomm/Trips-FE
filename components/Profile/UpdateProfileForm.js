import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { observer } from "mobx-react";
import { Input, Button, useToast } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import authstore from "../../Store/authStore";
import profileStore from "../../Store/profileStore";

const UpdateProfileForm = ({ route, navigation }) => {
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
    profileStore.updateProfile(profile, navigation);
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
        <Text style={styles.signBtn}>Grab a look</Text>

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
      <Button onPress={handleSubmit} style={styles.updprofbttn}>
        <Text style={styles.updproftxt}> Update Profile </Text>
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
  updprofbttn: {
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
  updproftxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  signBtn: {
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
    paddingTop: 6,
  },
});
