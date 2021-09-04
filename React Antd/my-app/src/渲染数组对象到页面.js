import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  let all = parts.map(part => 
    <div>
      {part.name} -- {part.exercises}
    </div>  
  )
  return(
    <div>
      <h1>{course}</h1>
      <div>{all}</div>
    </div>
  )
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)


