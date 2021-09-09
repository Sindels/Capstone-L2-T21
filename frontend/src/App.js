import React from 'react'; //import react
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //import BrowserRoute, Router, Switch and route
import NavBar from "./Components/NavBar"; //import NavBar and SearchBar component
import SearchBar from './Components/SearchBar';
import './App.css'; //import stylesheet

function App() {
  return (
    <div className="App">
      <Router> {/*used Router, NavBar, Switch and Route*/}
        <NavBar />
        <Switch>
          <Route path="/" exact component={SearchBar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App; //export the App component
