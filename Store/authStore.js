import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "./api";
import profileStore from "./profileStore";

class AuthStore {
  user = null;
  loading = true;

  constructor() {
    makeAutoObservable(this, {});
  }
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    console.log(
      "🚀 ~ file: authStore.js ~ line 19 ~ AuthStore ~ setUser= ~ this.user ",
      this.user
    );
  };
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < decodedToken.exp) {
        this.setUser(token);
        this.loading = false;
      } else {
        this.signOut();
      }
    }
  };
  signIn = async (user, navigation, toast) => {
    try {
      const resp = await api.post("/signin", user);

      await this.setUser(resp.data.token);
      this.loading = false;
      //TODO need to edit the Toast
      toast.show({
        title: `Hello ${this.user.username}`,
        status: "success",
      });
      navigation.navigate("TripList");
      profileStore.fetchProfiles();
    } catch (error) {
      console.log(error);
      toast.show({
        title: "Sorry Cannot Sign In",
        status: "error",
      });
    }
  };

  signUp = async (user, navigation, toast) => {
    try {
      const resp = await api.post("/signup", user);
      console.log(
        "🚀 ~ file: authStore.js ~ line 57 ~ AuthStore ~ signUp= ~ user",
        user
      );
      await this.setUser(resp.data.token);
      console.log(
        "🚀 ~ file: authStore.js ~ line 62 ~ AuthStore ~ signUp= ~ resp.data.token",
        resp.data.token
      );
      toast.show({
        title: `Welcome ${this.user.username}`,
        status: "success",
      });
      this.loading = false;
      navigation.navigate("TripList");
      profileStore.fetchProfiles();
    } catch (error) {
      console.log(error);
    }
  };
  signOut = () => {
    delete api.defaults.headers.common.Authorization;
    AsyncStorage.removeItem("myToken");
    this.user = null;
    this.loading = false;
  };
}

const authstore = new AuthStore();
authstore.checkForToken();
export default authstore;
