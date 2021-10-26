import React from "react";
import Content from "../components/Content/content";
import Nav from "../components/Nav/"
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Content />
      </div>
    );
  }
}
