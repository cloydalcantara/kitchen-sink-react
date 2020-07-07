import React, { Suspense } from "react";
import PublicRouter from '../routes/PublicRouter'
import { Route, Switch } from "react-router-dom";
import Spinner from "./../views/spinner/Spinner";
import { ReactNavbar } from "react-responsive-animate-navbar";

export default () => {
  return (
    <div>
        <header style={{position:"relative", backgroundColor:"black"}}>
          <ReactNavbar
              color="#004999"
              logo="https://lirp-cdn.multiscreensite.com/ccbfff43/dms3rep/multi/opt/MS+LOGO-01-884716fd-320w.png"
              menu={[
                  { name: "HOME", to: "/home"},
                  { name: "PROJECTS", to: "/users" },
                  { name: "COLLECTIONS", to: "/users1" },
                  { name: "AFFILIATES", to: "/users2" }
              ]}
              social={[
              {
                  name: "Facebook",
                  url: "https://www.facebook.com/nazeh200/",
                  icon: ["fab", "facebook-f"],
              },
              {
                  name: "Instagram",
                  url: "https://www.instagram.com/nazeh_taha/",
                  icon: ["fab", "instagram"],
              },
              {
                  name: "Twitter",
                  url: "http://nazehtaha.herokuapp.com/",
                  icon: ["fab", "twitter"],
              }
              ]}
          />
        </header>
        <section className="nav-query">
          <Suspense fallback={<Spinner />}>
            <Switch>
              {
                PublicRouter.map((prop, key) => {
                  return (
                    <Route
                      path={prop.path}
                      component={prop.component}
                      key={key}
                    />
                  );
                })    
              }
            </Switch>
          </Suspense>
        </section>
    </div>
  );
};
