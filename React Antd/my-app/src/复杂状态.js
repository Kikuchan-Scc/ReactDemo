import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

const App = () => {
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });

  const handleLeft = () => {
    const newClicks = {
      ...click,
      left: click.left + 1,
    };
    setClick(newClicks);
  };

  const handleRight = () => {
    const newClicks = {
      ...click,
      right: click.right + 1,
    };
    setClick(newClicks);
  };

  return (
    <div>
      {click.left}
      <button onClick={handleLeft}>left</button>
      <button onClick={handleRight}>Right</button>
      {click.right}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
