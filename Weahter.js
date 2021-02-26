import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "",
    gradient: [],
  },
  Drizzle: {
    iconName: "",
    gradient: [],
  },
  Rain: {
    iconName: "",
    gradient: [],
  },
  Snow: {
    iconName: "",
    gradient: [],
  },
  Mist: {
    iconName: "",
    gradient: [],
  },
  Smoke: {
    iconName: "",
    gradient: [],
  },
  Haze: {
    iconName: "",
    gradient: [],
  },
  Dust: {
    iconName: "",
    gradient: [],
  },
  Fog: {
    iconName: "",
    gradient: [],
  },
  Sand: {
    iconName: "",
    gradient: [],
  },
  Dust: {
    iconName: "",
    gradient: [],
  },
  Ash: {
    iconName: "",
    gradient: [],
  },
  Squall: {
    iconName: "",
    gradient: [],
  },
  Tornado: {
    iconName: "",
    gradient: [],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F2994A", "#F2C94C"],
    comment: "It's Sunny! I hate sunny...",
  },
  Clouds: {
    iconName: "",
    gradient: [],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}> {temp} ℃ </Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.temp}> {weatherOptions[condition].comment} </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    color: "white",
    fontSize: 32,
  },
});
