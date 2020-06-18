import React from 'react';

const Form = (props) => (
  <div className="form">
    <form onSubmit={props.getFlights}>
      <input
        type="text"
        name="flyFrom"
        className="form-input"
        placeholder="Departing Airport e.g LHR"
      />
      <input
        type="text"
        name="date"
        className="form-input"
        placeholder="dd/mm/yyyy"
      />
      <button className="form-btn">Check Flights</button>
    </form>
  </div>
);
export default Form;
