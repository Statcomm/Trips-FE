import { makeAutoObservable } from "mobx";
import api from "./api";
import authstore from "./authStore";
import profileStore from "./profileStore";

class TripStore {
  trips = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
  fetchTrips = async () => {
    try {
      const response = await api.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createTrip = async (newTrip, navigation, toast) => {
    try {
      // const formData = new FormData();

      // for (const key in newTrip) {
      //   formData.append(key, newTrip[key]);
      // }

      // const profileId = profileStore.profile.find((oneProf) => {
      //   oneProf.owner._id === authstore.user.id;
      // });

      console.log(
        "🚀 ~ file: tripstore.js ~ line 35 ~ TripStore ~ createTrip= ~ newTrip",
        newTrip
      );
      const response = await api.post(
        `6216282c3ce36ddb50af42cd/trips`,
        newTrip
      );

      this.trips.push(response.data);

      this.loading = false;
      navigation.goBack();
      toast.show({
        title: "trip is created Successfully",
        status: "success",
      });
    } catch (error) {
      console.log(error);
      toast.show({
        title: "Cannot Create",
        status: "error",
      });
    }
  };

  deleteTrip = async (id, navigation, toast) => {
    try {
      const response = await api.delete(`/trips/${id}`);
      console.log(response.data);
      //destractire
      const tempTrip = this.trips.filter((trip) => trip._id !== id);
      this.trips = tempTrip;
      this.loading = false;

      navigation.replace("TripList");
      toast.show({
        title: "trip is Deleted Successfully",
        status: "success",
      });
    } catch (error) {
      console.log(error);
      toast.show({
        title: "I'm Sorry You are not the Owner",
        status: "error",
      });
    }
  };
  updateTrip = async (updatedTrip, navigation, toast) => {
    try {
      const response = await api.put(`/trips/${updatedTrip._id}`, updatedTrip);
      const tempTrip = this.trips.map((trip) =>
        trip._id === updatedTrip._id ? response.data : trip
      );
      this.trips = tempTrip;

      navigation.navigate("TripList");
      toast.show({
        title: "trip is Deleted Successfully",
        status: "success",
      });
    } catch (error) {
      console.log(error);
      toast.show({
        title: "you cannot update",
        status: "error",
      });
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
