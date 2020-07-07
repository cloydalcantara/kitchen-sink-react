import React from "react";
import indexRoutes from "./routes/";
import publicIndexRoutes from './routes/index1'
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, history } from "./redux/Store";
import { PrivateRoute } from "./routes/PrivateRoutes";
import { PublicRoute } from './routes/PublicRoute'

const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/" history={history}>
        <Switch>
          {
            indexRoutes.map((prop, key) => {
              return (
                <PrivateRoute
                  path={prop.path}
                  key={key}
                  component={prop.component}
                />
              );
            })
          }
          {
            publicIndexRoutes.map((prop, key) => {
              return (
                <PublicRoute
                  path={prop.path}
                  key={key}
                  component={prop.component}
                />
              );
            })
          }
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
