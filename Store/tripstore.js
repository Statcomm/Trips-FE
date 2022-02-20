import { makeAutoObservable } from "mobx";
import api from "./api";

class TripStore {
  trips = [];
  constructor() {
    makeAutoObservable(this);
  }
  fetchTrips = async () => {
    try {
      const response = await api.get("/trips");
      this.trips = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // createTrip = async (newTrip) => {
  //   try {
  //     const response = await api.post("/trips", newTrip);
  //     this.trips.push(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // deleteTrip = async (id) => {
  //   try {
  //     const response = await api.delete(`/trips/${id}`);
  //     console.log(response.data);
  //     this.trips = this.trips.filter((trip) => trip.id !== id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // updateTrip = async (updatedTrip) => {
  //   try {
  //     const response = await api.put(`/trips/${updatedTrip.id}`, updatedTrip);
  //     this.trips = this.trips.map((trip) =>
  //       trip.id === updatedTrip.id ? response.data : trip
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
