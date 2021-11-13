import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./view/Home";
import Book from "./view/Book";
import Show from "./view/ShowPage";
import Announcement from "./view/Announcement";
import AboutUs from "./view/AboutUs";
import NotFound from './view/NotFound'
import Login from "./view/Login";
import Layout from "./view/Layout";
import LayoutPage from "./view/LayoutPage";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Show}></Route>
      </Layout>
      <Switch>
        <LayoutPage>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/Skin" component={Book}></Route>
          <Route exact path="/Announcement" component={Announcement}></Route>
          <Route exact path="/AboutUs" component={AboutUs}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="*" component={NotFound}></Route>
        </LayoutPage>
      </Switch>
    </Router>
  );
}

export default App;
