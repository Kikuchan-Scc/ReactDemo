import React from "react";
import Nav from "../components/Nav"
export default class LayoutPage extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
