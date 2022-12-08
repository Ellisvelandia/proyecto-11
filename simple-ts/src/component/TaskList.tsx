import { Task } from "../interface/Task";

interface Props {
  tasks: Task[];
}

const TaskList = ({ tasks }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <div>
          <h2>{task.title}</h2>
        </div>
      ))}
    </>
  );
};

export default TaskList;
