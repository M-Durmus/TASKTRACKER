import React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, deleteTask }) => {
  return (
    <div className={`task $ {task.isDone ?"done" : ""} `}
    onDoubleClick={()=>console.log(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
