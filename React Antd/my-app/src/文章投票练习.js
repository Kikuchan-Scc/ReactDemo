import ReactDOM from "react-dom";
import React, { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;

const Content = ({ text, votes }) => (
  <div>
    <p>{text}</p>
    <p>has {votes} vote</p>
  </div>
);

const Winner = ({ anecdotes, allVotes }) => {
  //Winner组件需要筛选出最高票数的文章和票数两个参数
  const highVotes = Math.max(...allVotes); //选出最高票数的文章
  const winnerIndex = allVotes.indexOf(highVotes);
  const winner = anecdotes[winnerIndex]; //返回票数最高的文章
  if (highVotes === 0) {
    return <p>暂无投票数据</p>;
  } else {
    return (
      <div>
        <p>{winner}</p>
        <p>has {highVotes} votes</p>
      </div>
    );
  }
};

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [select, setSelect] = useState(0);
  const [allVotes, setVotes] = useState(Array(7).fill(0));

  const handleClick = () => {
    const newNum = [...allVotes]; //获取投票数组
    newNum[select] += 1; //给当前的文章投票
    setVotes(newNum); //将得到的文章点赞数打印到页面
    console.log(newNum);
  };

  const handleRandom = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length);
    setSelect(arrayIndex);
  };

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Content text={anecdotes[select]} votes={allVotes[select]} />
      <Button text="votes" onClick={handleClick} />
      <Button text="next" onClick={handleRandom} />
      <Header text="票数最多的" />
      <Winner anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
];

ReactDOM.render(<App />, document.getElementById("root"));
