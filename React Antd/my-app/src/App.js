import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { css } from "@emotion/css";
import { Result } from "antd";
import Home from "./view/Home";
import Book from "./view/Book";
import Show from "./view/ShowPage";
import Announcement from "./view/Announcement";
import AboutUs from "./view/AboutUs";
import Login from "./view/Login";
import Layout from "./view/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Show}></Route>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/Book" component={Book}></Route>
          <Route exact path="/Announcement" component={Announcement}></Route>
          <Route exact path="/AboutUs" component={AboutUs}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route
            render={() => (
              <Result
                className={css`
                  height: 93.9vh;
                  padding-top: 120px;
                `}
                status="404"
                title="哎呀！走丢惹"
                subTitle="对不起您访问的页面不存在"
              />
            )}
          ></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
