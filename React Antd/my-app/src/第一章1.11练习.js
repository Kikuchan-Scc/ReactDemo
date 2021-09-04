import React, { useState } from "react";

const Header = (props) => <h1>{props.name}</h1>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, num }) => {
  if (text === "positive") {
    return (
      <div>
        {text} {num} %
      </div>
    );
  }
  return (
    <div>
      {text} {num}
    </div>
  );
};

const Statistics = ({ props }) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good * 1 + props.bad * -1) / total;
  const positive = props.good * (100 / total);
  if (total == 0) {
    return <div>无数量</div>;
  }
  return (
    <div>
      <StatisticLine text="good" num={props.good} />
      <StatisticLine text="neutral" num={props.neutral} />
      <StatisticLine text="bad" num={props.bad} />
      <StatisticLine text="total" num={total} />
      <StatisticLine text="average" num={average} />
      <StatisticLine text="positive" num={positive} />
    </div>
  );
};

const App = () => {
  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => setValue({ ...value, good: value.good + 1 });
  const handleNeutralClick = () =>
    setValue({ ...value, neutral: value.neutral + 1 });
  const handleBad = () => setValue({ ...value, bad: value.bad + 1 });

  return (
    <div>
      <Header name="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Header name="statistics" />
      <Statistics props={value} />
    </div>
  );
};

export default App;
