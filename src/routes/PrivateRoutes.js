import React from "react";
import { Route, Redirect } from "react-router-dom";
const auth = false
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    // if (!auth) {
    //     // not logged in so redirect to login page with the return url
    //     return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    // }

    // authorised so return component
    return <Component {...props} />
  }} />
);

export default PrivateRoute;

