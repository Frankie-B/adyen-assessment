import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Flights from './pages/Flights';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/flights" component={Flights} />
      </Switch>
    </div>
  );
}

export default App;
