// import { makeObservable, observable, action } from "mobx";
// import api from "api";

// class ProfileStore {
//   profile = [];
//   constructor() {
//     makeObservable(this, {
//       profile: observable,
//       fetchProfiles: action,
//       createProfile: action,
//       deleteProfile: action,
//     });
//   }
//   fetchProfiles = async () => {
//     try {
//       const response = await api.get("/profiles");
//       this.profile = response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

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
//   updateProfile = async (updatedProfile) => {
//     try {
//       const response = await api.put(
//         `/profiles/${updatedProfile.id}`,
//         updatedProfile
//       );
//       this.profile = this.profile.map((profile) =>
//         profile.id === updatedProfile.id ? response.data : profile
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// const profileStore = new ProfileStore();
// profileStore.fetchProfiles();
// export default profileStore;
