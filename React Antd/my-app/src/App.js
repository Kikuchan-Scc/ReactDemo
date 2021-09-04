import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./view/Home";
import Book from "./view/Book";
import Announcement from "./view/Announcement";
import AboutUs from "./view/AboutUs";
import Login from "./view/Login";
import Layout from "./view/Layout";


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Book" component={Book}></Route>
          <Route exact path="/Announcement" component={Announcement}></Route>
          <Route exact path="/AboutUs" component={AboutUs}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route render={() => <div>404</div>}></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
