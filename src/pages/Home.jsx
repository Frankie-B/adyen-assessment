import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/main.scss';
import Default from '../Layouts/Default';
import Footer from '../Layouts/Footer';

export default class Home extends Component {
  render() {
    return (
      <Default>
        <div className="home">
          <div className="heading-container">
            <h1 className="home-heading">
              Welcome To <span className="highlight">Out-Of-Office</span>
            </h1>
            <h3 className="home-subheading">You office relocation finder</h3>
            <Link to={'/locations'}>
              <button className="home-btn">Search Locations</button>
            </Link>
          </div>
        </div>
        <Footer />
      </Default>
    );
  }
}
