import React, { Component } from 'react';
import './Reservations.css';

class Reservations extends Component {
  state = {
    name: '',
    date: '',
    time: '',
    guests: 1
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Reservation made for ${this.state.name} on ${this.state.date} at ${this.state.time} for ${this.state.guests} guests.`);
  };

  render() {
    return (
      <div className="reservations">
        <h1>Make a Reservation</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />

          <label>Date:</label>
          <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required />

          <label>Time:</label>
          <input type="time" name="time" value={this.state.time} onChange={this.handleChange} required />

          <label>Number of Guests:</label>
          <input type="number" name="guests" value={this.state.guests} onChange={this.handleChange} min="1" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Reservations;
