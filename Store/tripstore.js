import { makeAutoObservable } from "mobx";
import api from "./api";

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
      const formData = new FormData();

      for (const key in newTrip) {
        formData.append(key, newTrip[key]);
      }
      console.log("3");

      const response = await api.post("/trips", newTrip);
      console.log("4");

      this.trips.push(response.data);

      // this.loading = false;
      // navigation.navigate(TripList);
      // toast.show({
      //   title: "trip is created Successfully",
      //   status: "success",
      // });
    } catch (error) {
      console.log("5");
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
      this.trips = this.trips.filter((trip) => trip.id !== id);
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
