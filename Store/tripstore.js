import { makeObservable, observable, action } from "mobx";
import api from "api";

class TripStore {
  trip = [];
  constructor() {
    makeObservable(this, {
      trip: observable,
      fetchTrips: action,
      createTrip: action,
      deleteTrip: action,
    });
  }
  fetchTrips = async () => {
    try {
      const response = await api.get("/trips");
      this.trip = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      const response = await api.post("/trips", newTrip);
      this.trip.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteTrip = async (id) => {
    try {
      const response = await api.delete(`/trips/${id}`);
      console.log(response.data);
      this.trip = this.trip.filter((trip) => trip.id !== id);
    } catch (error) {
      console.log(error);
    }
  };
  updateTrip = async (updatedTrip) => {
    try {
      const response = await api.put(`/trips/${updatedTrip.id}`, updatedTrip);
      this.trip = this.trip.map((trip) =>
        trip.id === updatedTrip.id ? response.data : trip
      );
    } catch (error) {
      console.log(error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
