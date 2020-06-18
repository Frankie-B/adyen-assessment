import React, { Component } from 'react';
import '../stylesheets/card.scss';

const API_KEY = `ffb49333a7121d32f97a98efaa4905b9`;

export default class Budapest extends Component {
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

  componentDidMount() {
    this.getWeather();
  }

  getWeather = async (e) => {
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&appid=${API_KEY}&units=metric`
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
      });
    }
  };

  render() {
    return (
      <div className="amsterdam">
        <div className="card overflow">
          <img
            src={
              'https://res.cloudinary.com/frankie-dev/image/upload/v1592167505/Adyen-assesment/budapest.jpg'
            }
            className="card-img-top"
            alt={''}
          />
          <div className="card-body">
            <h5 className="card-title">{this.state.city}</h5>
            <div className="card-content">
              {this.state.temperature && (
                <p>
                  Temperature: <span>{this.state.temperature}</span>
                </p>
              )}
              {this.state.feels && (
                <p>
                  Feels Like: <span>{this.state.feels}</span>
                </p>
              )}
              {this.state.humidity && (
                <p>
                  Humidity: <span>{this.state.humidity}</span>
                </p>
              )}
              {this.state.description && (
                <p>
                  Conditions: <span>{this.state.description}</span>
                </p>
              )}
            </div>
            <a href={'/flights'}>
              <button>Check Flights</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
