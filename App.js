import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';



const API_KEY = "63d90416dea40c5f5f4231a9b0fe8654";

export default class App extends Component {
  state = { 
    isLoaded: false,
    temprature: null,
    currentWeather: null,
    error: null
  };

  _getWeather = (lat, long) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temprature: json.main.temp,
        currentWeather: json.weather[0].main,
        isLoaded: true
      })
    })
    .catch(err => console.log(err))
  }

  _weatherLotation = () => {
    setTimeout(lotate => this.setState({
          currentWeather: "Clear",
          temprature: 230,
          isLoaded: true
        }), 3000);
    setTimeout(lotate => this.setState({
          currentWeather: "Rain",
          temprature: 230,
          isLoaded: true
        }), 6000);
    setTimeout(lotate => this.setState({
          currentWeather: "Thunderstorm",
          temprature: 230,
          isLoaded: true
        }), 9000);
    setTimeout(lotate => this.setState({
          currentWeather: "Clouds",
          temprature: 230,
          isLoaded: true
        }), 12000);
    setTimeout(lotate => this.setState({
          currentWeather: "Snow",
          temprature: 230,
          isLoaded: true
        }), 15000);
    setTimeout(lotate => this.setState({
          currentWeather: "Drizzle",
          temprature: 230,
          isLoaded: true
        }), 18000);
    setTimeout(lotate => this.setState({
          currentWeather: "Haze",
          temprature: 230,
          isLoaded: true
        }), 21000);
    setTimeout(lotate => this.setState({
          currentWeather: "Mist",
          temprature: 230,
          isLoaded: true
        }), 24000);
    setTimeout(lotate => (
      navigator.geolocation.getCurrentPosition(
        position => {
          this._getWeather(position.coords.latitude, position.coords.longitude);
        }, error => this.setState({ error: error })
      )
    ), 27000)
  }

  componentDidMount() {
        this._weatherLotation()
  }

  render() {
    const { temprature, currentWeather, isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        { isLoaded ? <Weather temp={ temprature } condition={ currentWeather } /> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting Weather</Text>
            { error ? <Text style={styles.errorText}>{ error }</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end"
  },
  loadingText: {
    paddingLeft: 25,
    fontSize: 38,
    marginBottom: 100,
    fontWeight: "300"
  },
  errorText: {
    paddingLeft: 25,
    marginBottom: 40,
    backgroundColor: "transparent",
    color: "red"
  }
});
