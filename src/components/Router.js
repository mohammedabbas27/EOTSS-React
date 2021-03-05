import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ServicesPage from "./ServicesPage";
import VpnService from "./VpnService";
const Router = () => (
  <HashRouter basename="/eotss">
    <Switch>
      <Route exact path="/">
        <Redirect to="/services" />
      </Route>
      <Route path="/services" component={ServicesPage} />
      <Route path="/VpnService" component={VpnService} />
    </Switch>
  </HashRouter>
);

export default Router;
