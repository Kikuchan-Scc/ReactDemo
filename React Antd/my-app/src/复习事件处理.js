import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

const App = () => {
  const [value, setValue] = useState(10);
  //目前定义有点长
  // const hello = (who) => {       //辅助变量
  //   const handler = () => {
  //     console.log("hello", who);
  //   };

  //   return handler;
  // };

  //消除辅助变量直接返回创建的函数
  // const hello = (who) => {
  //   return () => {
  //     console.log("hello", who);
  //   };
  // };

  //因为hello函数是一个单独的返回命令组成的，所以甚至可以把大括号去掉，然后把箭头写道同一行使代码更加简洁
  const hello = (who) => () => {
    console.log('hello', who)
  }

  return (
    <div>
      {value}
      <button onClick={hello("七海")}>start</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
