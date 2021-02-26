// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";

import axios from "axios";
import * as Location from "expo-location";

import Loading from "./Loading";

const API_KEY = "20e3b7d6e432fb24d46adc288538bc70";

export default class extends React.Component {
  state = { isLoading: true };

  getWeather = async (lat, long) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    );

    console.log(data);
  };

  getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Can't find you", "So sad");
    } else {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
      console.log(latitude, longitude);
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
