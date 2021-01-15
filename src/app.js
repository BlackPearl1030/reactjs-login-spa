import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import LoginBlock from "./containers/LoginBlock";
import Dashboard from './containers/Dashboard';
import { ROUTES } from "./constants/routes";
import PrivateRoute from './routes/PrivateRoute';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path={ROUTES.LOGIN} component={LoginBlock} />
          <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} />
          <Redirect to={ROUTES.LOGIN} />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
