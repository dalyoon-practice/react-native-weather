import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Clear: {
    color: ["#FEF253", "#FF7300"],
    title: "Sunny as Fuck",
    subtitle: "Go get your ass burnt",
    icon: "weather-sunny"
  },
  Rain: {
    color: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
    icon: "weather-pouring"
  },
  Thunderstorm: {
    color: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: "weather-lightning"
  },
  Clouds: {
    color: ["#D7D2CC", "#304352"],
    title: "Yeah...Clouds..",
    subtitle: "I know. fucking boring",
    icon: "weather-cloudy"
  },
  Snow: {
    color: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build the snowman? Fuck no.",
    icon: "weather-snowy"
  },
  Drizzle: {
    color: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay🏳️‍🌈",
    icon: "weather-rainy"
  },
  Haze: {
    color: ["#E2F1FF", "#9AACBC"],
    title: "Haze",
    subtitle: "Don't know what this is",
    icon: "weather-fog"
  },
  Mist: {
    color: ["#657289", "#404754"],
    title: "Mist",
    subtitle: "It's like you have no glasses on",
    icon: "weather-fog"
  }
};

const Weather = ({ temp, condition }) => (
  <LinearGradient
    colors={weatherCases[condition].color}
    style={styles.container}
  >
    <StatusBar barStyle="light-content" />
    <View style={styles.upper}>
      <MaterialCommunityIcons
        color="white"
        size={144}
        name={weatherCases[condition].icon}
      />
      <Text style={styles.temp}>{Math.floor(temp - 273.15)}℃</Text>
    </View>
    <View style={styles.lower}>
      <Text style={styles.title}>{weatherCases[condition].title}</Text>
      <Text style={styles.subtitle}>{weatherCases[condition].subtitle}</Text>
    </View>
  </LinearGradient>
);

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 24
  },
  title: {
    fontSize: 38,
    fontWeight: "300",
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 24,
    color: "white",
    backgroundColor: "transparent"
  }
});