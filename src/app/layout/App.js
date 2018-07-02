import React, { Component } from 'react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>jobs.Map</h1>
        <NavBar />
        <EventDashboard></EventDashboard>

      </div>
    );
  }
}

export default App;
