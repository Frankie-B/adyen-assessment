import React, { Component } from 'react';
import Headings from '../components/Headings';
import Default from '../Layouts/Default';
import Amsterdam from '../components/Amsterdam';
import Barcelona from '../components/Barcelona';
import Budapest from '../components/Budapest';

const API_KEY = `ffb49333a7121d32f97a98efaa4905b9`;

export default class Locations extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    feels: undefined,
    high: undefined,
    low: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    const data = await api.json();

    if (data.cod === 200) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        feels: data.main.feels_like,
        high: data.main.temp_max,
        low: data.main.temp_min,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    }
  };

  render() {
    return (
      <Default>
        <div className="locations">
          <Headings />
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-6 col-md-4">
                <Amsterdam />
              </div>
              <div className="col-6 col-md-4">
                <Barcelona />
              </div>
              <div className="col-6 col-md-4">
                <Budapest />
              </div>
            </div>
          </div>
        </div>
      </Default>
    );
  }
}
