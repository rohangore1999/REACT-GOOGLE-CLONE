import './App.css';
import Home from './pages/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>
          {/* we have two pages */}
          {/* Home Page => / */}
          {/* Search Page => /search */}
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/search'>
            <SearchPage />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}


export default App;
