import { makeAutoObservable } from "mobx";
import api from "./api";

class ProfileStore {
  profile = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
  fetchProfiles = async () => {
    try {
      const response = await api.get("/profiles");
      this.profile = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  //   createProfile = async (newProfile) => {
  //     try {
  //       const response = await api.post("/", newProfile);
  //       this.profile.push(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   deleteProfile = async (id) => {
  //     try {
  //       const response = await api.delete(`/profiles/${id}`);
  //       console.log(response.data);
  //       this.profile = this.profile.filter((profile) => profile.id !== id);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  updateProfile = async (updatedProfile) => {
    try {
      const response = await api.put(
        `/profiles/${updatedProfile._id}`,
        updatedProfile
      );
      console.log(
        "🚀 ~ file: profileStore.js ~ line 42 ~ ProfileStore ~ updateProfile= ~ response",
        response.data
      );

      this.profile = this.profile.map((profile) =>
        profile._id === updatedProfile._id ? response.data : profile
      );

      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const profileStore = new ProfileStore();
profileStore.fetchProfiles();
export default profileStore;
