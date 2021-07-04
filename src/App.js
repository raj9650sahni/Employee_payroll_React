import logo from './logo.svg';
import './App.css';
import React from 'react';
import payrollForm from "./components/payroll_form/payroll_form"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "">
            <payrollForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;