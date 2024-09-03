import { useState } from "react";
import "./App.css";
import { CreateTodo } from "../components/CreateTodo";
import { Todos } from "../components/Todos";

function App() {
  const [count, setCount] = useState(0);

  const task = [
    {
      title: "Goto gym",
      description: "goto gym",
      completed: false,
    },
    {
      title: "Goto gym",
      description: "goto gym",
      completed: false,
    },
    {
      title: "Goto gym",
      description: "goto gym",
      completed: false,
    },
  ];

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos
        todos={[
          {
            title: "Goto gym",
            description: "goto gym",
            completed: false,
          },
        ]}
      ></Todos>
    </div>
  );
}

export default App;
