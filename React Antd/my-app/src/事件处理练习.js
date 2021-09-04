import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

const Display = (props) => <div>{props.value}</div>;

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  const [value, setValue] = useState(10);

  const setTovalue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setTovalue(1000)} text="一千" />
      <Button handleClick={() => setTovalue(0)} text="归零"/>
      <Button handleClick={() => setTovalue(value + 1)} text='加一'/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
