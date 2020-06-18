import React, { Component } from 'react';
import Default from '../Layouts/Default';
import Form from '../components/Form';

class Flights extends Component {
  state = {
    locations: [],
    error: undefined,
  };

  getFlights = async (e) => {
    e.preventDefault();

    const depart = e.target.elements.flyFrom.value;
    const date = e.target.elements.date.value;

    const flightApi = await fetch(
      `https://api.skypicker.com/flights?flyFrom=${depart}&dateFrom=${date}&partner=picky&v=3`
    );

    const { data } = await flightApi.json();
    if (!data) {
      this.setState({
        error: 'Search cannot be left empty',
      });
    } else {
      if (depart === 'LHR' && date) {
        const undressedData = data
          .map((i) => ({
            city: i.cityTo,
            price: i.price,
            duration: i.fly_duration,
            link: i.deep_link,
          }))
          .sort((a, b) => {
            return a.price - b.price;
          });

        const newData = ['Amsterdam', 'Barcelona', 'Budapest'].map((city) => {
          return undressedData.find((e) => e.city === city);
        });

        if (newData) {
          this.setState({
            locations: newData,
            error: '',
          });
        }
      }
    }
  };

  render() {
    return (
      <Default>
        <div className="flights">
          <div className="flights-heading">
            <h1 className="flights-title">
              Find <span className="highlight">Flights</span>
            </h1>
          </div>
          <div className="flights-content">
            <p className="text">
              Please enter the departing airport short code and pick a date to
              receive the cheapest flight results.
            </p>
          </div>
          <Form getFlights={this.getFlights} />
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              {this.state.locations.map((l) => {
                return (
                  <div className="col-6 col-md-4">
                    <div className="card overflow">
                      <img
                        src={`https://res.cloudinary.com/frankie-dev/image/upload/v1592393092/Adyen-assesment/${l.city}.jpg`}
                        className="card-img-top"
                        alt={''}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Flights To {l.city}</h5>
                        <div className="card-content">
                          <p>
                            Destination: <span>{l.city}</span>
                          </p>
                          <p>
                            Flight Duration: <span>{l.duration}</span>
                          </p>
                          <p>
                            Price EUR: <span>{l.price}</span>
                          </p>
                        </div>
                        <a href={l.link}>
                          <button>Book Flight</button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p>{this.state.error}</p>
        </div>
      </Default>
    );
  }
}

export default Flights;
