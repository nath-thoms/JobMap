import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/Navbar'

class App extends Component {
  render() {
    return (

      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard></EventDashboard>

        </Container>
      </div>
    );
  }
}

export default App;
