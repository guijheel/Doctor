import React from 'react';
import Header from './Header';
import Consultation from './Consultation';
import Outils from './Outils';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/">
            <Header/>
            <Consultation/>
            <Outils/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
