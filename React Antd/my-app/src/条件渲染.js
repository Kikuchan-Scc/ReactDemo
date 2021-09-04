import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

const History = (props) => {
  if (props.html.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.html.join("")}</div>;
};

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [html, setHtml] = useState([]);

  const handLeftClick = () => {
    setHtml(html.concat("L"));
    setLeft(left + 1);
  };

  const handRightClick = () => {
    setHtml(html.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button handleClick={handLeftClick} text="left" />
      <Button handleClick={handRightClick} text="right" />
      {right}
      <History html={html} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
