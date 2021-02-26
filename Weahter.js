import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Drizzle: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Rain: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Snow: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Mist: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Smoke: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Haze: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Dust: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Fog: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Sand: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Dust: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Ash: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Squall: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Tornado: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F2994A", "#F2C94C"],
    title: "Clear",
    subtitle: "It's Clear! but I hate clear...",
  },
  Clouds: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: "",
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
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}> {weatherOptions[condition].title} </Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
