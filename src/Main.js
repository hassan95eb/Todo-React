import React, { useState } from "react";
import Forms from "./Components/Forms";
import Items from "./Components/Items";
import taskContext from "./TaskContext";

export default function Main() {
  const [task, setTask] = useState([
    // { id: 1, title: "Object1", done: true },
    // { id: 2, title: "Object2", done: false },
  ]);
  // console.log(task);
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="main px-2">
          <taskContext.Provider value={{ task: task, setTask: setTask }}>
            <Forms />
            <hr className="mx-2" />
            <Items />
          </taskContext.Provider>
        </div>
      </div>
    </div>
  );
}
