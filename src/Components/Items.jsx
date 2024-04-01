import React, { useContext } from "react";
import del from "../images/delete-icon.svg";
import x from "../images/red-x-line-icon.svg";
import tick from "../images/tick-mark-icon.svg";
import taskContext from "../TaskContext";

export default function Items() {
  const { task, setTask } = useContext(taskContext);
  const handleSetDone = (id) => {
    const taskIndex = task.findIndex((t) => t.id === id);
    let newTask = [...task];
    newTask[taskIndex].done = !newTask[taskIndex].done;
    setTask(newTask);
  };
  const handleDelete = (id) => {
    let newTaskDel = task.filter((t) => t.id !== id);
    setTask(newTaskDel);
  };
  if (task.length) {
    return (
      <ul className="list-group">
        {task.map((t) => {
          return (
            <li
              key={t.id}
              className={`list-group-item d-flex justify-content-between my-2 rounded ${
                t.done === true ? "list-group-item-success" : ""
              }`}
            >
              <h3 className="list-item-title h5">{t.title}</h3>
              <div className="icons">
                {t.done === true ? (
                  <button
                    className="btn-list"
                    onClick={() => {
                      handleSetDone(t.id);
                    }}
                  >
                    <img src={tick} alt="done" />
                  </button>
                ) : (
                  <button
                    className="btn-list"
                    onClick={() => {
                      handleSetDone(t.id);
                    }}
                  >
                    <img src={x} alt="undone" />
                  </button>
                )}
                <button
                  className="btn-list"
                  onClick={() => {
                    handleDelete(t.id);
                  }}
                >
                  <img src={del} alt="delete" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>Nothing for Show to you</p>;
  }
}
