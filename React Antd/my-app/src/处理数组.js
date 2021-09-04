import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [html, setHtml] = useState([]);

  const handleLeft = () => {
    setLeft(left + 1);
    setHtml(html.concat("L"));
  };

  const handleRight = () => {
    setRight(right + 1);
    setHtml(html.concat("R"));
  };

  return (
    <div>
      {left}
      <button onClick={handleLeft}>left</button>
      <button onClick={handleRight}>right</button>
      {right}
      <p>{html.join}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
