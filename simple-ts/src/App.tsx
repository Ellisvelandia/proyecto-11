import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Task } from "./interface/Task";
import TaskList from "./component/TaskList";

type Props = {
  title: string;
};

export default function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([ 
    {
      id: 1,
      title: "Learn React",
      description: "Learn React fats",
      completed: false,
    },
  ]);

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
       <TaskList tasks={tasks}/>
      </main>
    </div>
  );
}
