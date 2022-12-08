import { AiOutlinePlus } from "react-icons/ai";

interface Props {}

const TaskForm = (props: Props) => {
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form action="">
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
        />
        <textarea
          name="description"
          rows={2}
          placeholder="write a Description"
          className="form-control mb-3 shadow-none border-0"
        ></textarea>
        <button className="btn btn-primary">
          save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
