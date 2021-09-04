import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

//计数器
// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   setTimeout(() => setCounter(counter + 1),1000)
//   console.log('reading..',counter)

//   return(
//   <div>{counter}</div>
//   )
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// )

//加一计数器
// const App = () => {
//   let [counter, setCounter] = useState(0)

//   return(
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>plus</button>
//       <button onClick={() => setCounter(0)}>zero</button>
//     </div>
//   )
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// )

//改装加一计算器让每个点击事件分离成单独函数
// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const plusOne = () => setCounter(counter + 1)

//   const zero = () => setCounter(0)

//   return(
//     <div>
//       <div>{counter}</div>
//       <button onClick={plusOne}>PLUS</button>
//       <button onClick={zero}>ZERO</button>
//     </div>
//   )
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// )

//进一步改装计算器
const App = () => {
  const [counter, setCounter] = useState(0);

  const Display = (props) => {
    return <div>{counter}</div>;
  };
  //因为该组件只使用一个counter一个字段因此可以简化为下面这种写法
  // const Display = ({counter}) => <div>{counter}</div>

  const Button = (props) => {
    return <button onClick={props.onClick}>
      {props.text}
    </button>
  }
  const plusOne = () => setCounter(counter + 1);
  const jianOne = () => setCounter(counter - 1);
  const zero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={plusOne} text="PLUS" />
      <Button onClick={jianOne} text="DOWN" />
      <Button onClick={zero} text="ZERO" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
