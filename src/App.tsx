import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <Switch>
          <div className="challenge">
            <Route exact path="/" component={Home} />
            <Route path="/registration" component={RegistrationForm} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
