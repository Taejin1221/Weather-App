// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";

import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = { isLoading: true };
  getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Can't find you", "So sad");
    } else {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

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
