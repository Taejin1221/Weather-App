// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";

import axios from "axios";
import * as Location from "expo-location";

import Loading from "./Loading";
import Weather from "./Weahter";

const API_KEY = "20e3b7d6e432fb24d46adc288538bc70";

export default class extends React.Component {
  state = { isLoading: true };

  getWeather = async (lat, long) => {
    const {
      data: {
        main: { temp },
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    );

    this.setState({ isLoading: false, temp });

    console.log(temp);
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
      console.log(latitude, longitude);
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}
