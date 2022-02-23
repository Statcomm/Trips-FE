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

  updateProfile = async (updatedProfile) => {
    try {
      const response = await api.put(
        `/profiles/${updatedProfile._id}`,
        updatedProfile
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
