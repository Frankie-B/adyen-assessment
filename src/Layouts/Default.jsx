import React, { Component } from 'react';
import Navigation from './Navigation';

export default class Default extends Component {
  render() {
    return (
      <div className="default">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
