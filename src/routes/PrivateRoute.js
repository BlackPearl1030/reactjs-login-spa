import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const storedToken = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={props => {

      if (storedToken) {
        return <Component {...props} />
      }

      return (
        <Redirect
          to={{ pathname: '/login', state: { referer: props.location } }}
        />
      );
      }}
    />
  );
}

export default PrivateRoute;